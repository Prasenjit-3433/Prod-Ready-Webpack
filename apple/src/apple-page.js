import Heading from './components/heading/heading';
import AppleImage from './components/apple-image/apple-image';

const heading = new Heading();
heading.render('apple');

const appleImage = new AppleImage();
appleImage.render();

// Dynamic Import
import('HelloWorldApp/HelloWorldButton').then(HelloWorldButtonModule => {
    const HelloWorldButton = HelloWorldButtonModule.default;
    const helloWorldButton = new HelloWorldButton();
    helloWorldButton.render();
})