import Heading from './components/heading/heading';
import AppleImage from './components/apple-image/apple-image';
import _ from 'lodash';

const heading = new Heading();
heading.render(_.upperFirst('apple'));

const appleImage = new AppleImage();
appleImage.render();