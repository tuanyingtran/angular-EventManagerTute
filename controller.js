angular.module('eventApp')
.controller('formController', ['eventFactory', function (eventFactory) {
	var vm = this;
	vm.edit = {};
	this.eventForm={};
	//this.eventForm.date = new Date(2016,2,3);//set default to form, shoudl be now()
    this.events = eventFactory.getEvents();
    this.categories = [ {id:1, name: 'Music',},
                        {id:2, name: 'Art',},
                        {id:3, name: 'Sports',},
                        {id:4, name: 'Special'}];
						
	this.selectedCat = {id:1, name: 'Music',}; //Default selected category
	
	vm.isSpecialEvent = 'false';
	vm.isSpecialEventValue = {id:1, value: 'Precious'};
    
    //checkbox types
    this.specialTypes=[{name: 'Rated R', checked:false},
                      { name: 'VIP Only', checked:false}];
	

    this.selectAll = function(){
		if(vm.bothSelected) 
			vm.bothSelected = true;
		else 
			vm.bothSelected = false;
		angular.forEach(vm.specialTypes, function(item){
											item.checked = vm.bothSelected; })
	};
	this.submitForm = function(postEvent){
		
		postEvent.category = this.selectedCat; //pass into the view submit eventForm
		postEvent.specialTypes = this.specialTypes;
        eventFactory.createEvent(angular.copy(postEvent), this.events);
		alert('Added Successfully!');
		//TODO: Reset or redirect
        console.log(this.events);
    }
}])

.controller('eventManagerController',['eventFactory', '$filter' ,function(eventFactory, $filter){
	this.events = eventFactory.getEvents();

	this.update = function(postEvent){
		eventFactory.updateEvent(angular.copy(postEvent),this.events);
		alert('Update Successfully');
	}

	this.delete = function(postEvent){
		eventFactory.deleteEvent(angular.copy(postEvent),this.events);
		alert('DELETE Successfully');
	}
	/*
	console.log('Start');
	var vm = this;
	eventFactory.getEvents().then(function(result){
		
		vm.events = result;
	});
	console.log('End');
	*/
	/*
	/*
	//$filter params: (filter name) (collection, field, reverse - true to reverse)
	this.events = $filter('orderBy')(this.events, 'name');'
	*/
}])