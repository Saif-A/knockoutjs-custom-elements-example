define(['path_to_knockoutjs/knockout'], function(ko) {

    function LikeWidgetViewModel(params) {
        this.chosenValue = params.value;
		this.myArray = ko.observableArray([
    { name: "Bungle", type: "Bear" },
    { name: "George", type: "Hippo" },
    { name: "Zippy", type: "Unknown" }]);
    }

    LikeWidgetViewModel.prototype.like = function() {
        this.chosenValue('like');
    };    
	
	LikeWidgetViewModel.prototype.like = function() {
        this.chosenValue('like');
    };

    LikeWidgetViewModel.prototype.dislike = function() {
        this.chosenValue('dislike');
    };

    return LikeWidgetViewModel;

});
