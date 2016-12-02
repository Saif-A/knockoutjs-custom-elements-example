$( document ).ready(function() {
    console.log( "ready!" );
    function Product(name, rating) {
        this.name = name;
        this.userRating = ko.observable(rating || null);
    }

    function MyViewModel() {
        this.products = ko.observableArray(); // Start empty
    }

    MyViewModel.prototype.addProduct = function() {
        var name = 'Product ' + (this.products().length + 1);
        this.products.push(new Product(name));
    };
    ko.components.register('like-or-dislike', {
        viewModel: { require: 'components/component-like-widget' },
        template: { require: 'path_to_requirejs-text/text!components/component-like-widget.html' }
    });
    ko.applyBindings(new MyViewModel());
});
