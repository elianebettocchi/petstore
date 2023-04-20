var shop = [
    {
      title: 'Food',
      image: './images/food1.png',
      price: '15',
      description: 'Pet food'
    },
    {
        title: 'Food',
        image: './images/food2.png',
        price: '12',
        description: 'Cat food'
      },
  
      {
        title: 'Food',
        image: './images/food3.png',
        price: '17',
        description: 'Dog food'
      },
      {
        title: 'Toys',
        image: './images/toy1.png',
        price: '5',
        description: 'Cat toy'
      },
      {
        title: 'Toys',
        image: './images/toy2.png',
        price: '7',
        description: 'Dog toy'
      },
      {
        title: 'Toys',
        image: './images/toy3.png',
        price: '47',
        description: 'Cat toy'
      },
      {
        title: 'Utilities',
        image: './images/carrier1.png',
        price: '27',
        description: 'Carrier'
      },
      {
        title: 'Utilities',
        image: './images/carrier2.png',
        price: '30',
        description: 'Carrier'
      },
      {
        title: 'Utilities',
        image: './images/kennel.png',
        price: '55',
        description: ''
      },
    ]
    
    var postHTML = " "



    for (var i=0; i < shop.length; i++){
        var heading = '<div class="col-lg-4 col-md-3' + '"><span><h5>' + shop[i].title + '</h5>'
        var image = '<img class="img-fluid img-square img-height" src="' + shop[i].image + '"/'
        var price = '<p> $' + shop[i].price + '</p></span>'
        var description = '<div class=""><p>'+ shop[i].description + '</p><button type="button" class="btn btn-success"> add to cart</button></div></div>'
        var concatThis = heading + image + price + description;
        postHTML = postHTML + concatThis
    }
    document.getElementById('market').innerHTML = postHTML