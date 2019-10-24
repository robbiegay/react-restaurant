# React Restaurant

A menu for a fictional restaurant at Awesome Inc!

## Getting Started

Click through the menu to view different food options. The menu is randomly generated via the [Random Menu Generator](https://entree-f18.herokuapp.com). Menu items are saved to Local Storage, and are therefore available across page loads. The restaurant name, operating hours, and item prices are randomly generated upon each load.

### Installing

Runs online - Click here to browse the menu: https://robbiegay.github.io/react-restaurant/

## Running The Tests

Had issues with a race condition and the API calls. Resolved this by using a conditional statement that only updated the local state when there where 24 items in the Menu Item array.

Mapped the 'Delete' and '=' keys to help with various development tests. Since these will be removed in the production build, you may copy them below if you want to use them for testing.

```javascript
document.addEventListener('keydown', function (e) {
    if (e.keyCode === 8) {
        console.log('LOCAL STORAGE WAS CLEARED!');
        localStorage.clear();
        console.log(window.localStorage);
        console.log('-------------------------');
    }
    if (e.keyCode === 187) {
        console.log('LOCAL STORAGE:');
        console.log(window.localStorage);
        console.log('-------------------------');
    }
});
```

## Built With

* [React](https://reactjs.org) - The JS library used
* [Bootstrap](https://getbootstrap.com) - The CSS framework used

## Contributing

If you've found a bug in my code, please feel free to send me an Issue!

## Authors

* **Robbie Gay** - [Robbie's Blog](https://robbiegay.github.io)