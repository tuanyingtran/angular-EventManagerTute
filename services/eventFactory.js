angular.module('eventApp')
    .factory('eventFactory',['$http','$q',function ($http,$q){
        var eventFactory={};
        
		var events = [];
        //global event array

        var events = [
			{id:'1',name:'Engage Art Fair',description:'Annual interactive experience featuring a curated selection of Californian art.', location:'Calistoga, CA',date:'2017-10-11',category:{id:2,name:'Art'}, email:'engageart@tuan.com', price:'100'},
			{id:'2',name:'Play or Learn Game of Go',description:'Sophisticated that Google and Facebook use it as the key test for their artificial intelligence programs', location:'Oakland, CA',date:'2016-06-11',category:{id:3,name:'Game'}, email:'gameofgo@tuan.com', price:'200'},
			{id:'3',name:'Road To Recovery 5K',description:'family-friendly 5K at Crissy Field.', location:'The City, CA',date:'2016-06-01',category:{id:3,name:'Sports'}, email:'acdc@angie.com', price:'300'},
			{id:'4',name:'May Day and Monet',description:'PEAK of Bloom for a true celebration of Springtime', location:'Healdsburg CA',date:'2017-5-01',category:{id:4,name:'Special'}, email:'maydaymonet@tuan.com', price:'400'},
			{id:'5',name:'Familiy Fun',description:'Weekend at Playland-Not-at-the-Beach', location:'El Cerrito, CA',date:'2016-10-11',category:{id:3,name:'Game'}, email:'familyfun@tuan3.com', price:'500'},
			{id:'6',name:'Game of Thrones',description:'Season 6 premiere', location:'Kingsland, 7 Kingdoms',date:'2016-04-23',category:{id:2,name:'Movie'}, email:'got@tuan.com', price:'600'},
			{id:'7',name:'Gallery Exhibitions',description:'Lucid Art Residency Annual Exhibition', location:'Point Reyes, CA',date:'2016-06-01',category:{id:2,name:'Art'}, email:'lucidart@tuan.com', price:'700'},
			{id:'8',name:'AC/DC in America',description:'Ac/dc concerts in USA', location:'Coachella, CA',date:'2019-12-24',category:{id:1,name:'Music'}, email:'acdc@tuan.com', price:'800'}
		];

        eventFactory.getEvents = function () {
			return events;
			/*
			//request multiple http then concat
			var event1 = $http.get('events.json');
			var event2 = $http.get('events2.json');
			
			return $q.all([event1, event2]).then(function(result){
				var tempEvents = [];
				angular.forEach(result, function(eachResult){
					tempEvents.push(eachResult.data);});
				return tempEvents;
			}).then(function(tempEvents){
				return tempEvents[0].concat(tempEvents[1]);
			});
			*/
		
		
		/*Using in one http request:
				var deferred = $q.defer();
			//var storedEvents = 
			$http.get('events2.json').then(function(response){
				deferred.resolve(response.data);				
				//var data = response.data;
				// http promise fullfilled
				//return data; 
			}, function(error){
				deferred.reject('Errors occurred :( ');
			});
			//return initial promise
           // return storedEvents
		   return deferred.promise;
		   */
        }//get all events

        eventFactory.createEvent = function(event, eventList){
			//generate id
			event.id = events.length + 1;
            events.push(event);
            eventList = events;

            return eventList;
        }//create event

		eventFactory.updateEvent = function(event,eventList){
			for(i=0, ii=events.length; i<ii; i++){
				if(event.id === events[i].id){
					events[i]=event;
					break;
				}
			}
			eventList = events;
			return eventList;
		}

		eventFactory.deleteEvent = function(event,eventList){
			for(i=0, ii=events.length; i<ii; i++){
				if(event.id === events[i].id){
					events.splice(i,1);
					break;
				}
			}
			eventList = events;
			return eventList;
		}

        return eventFactory;
    }]);

