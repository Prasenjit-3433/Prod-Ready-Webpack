import Heading from '../heading/heading';
import AppleImage from '../apple-image/apple-image';

class ApplePage {
    render() {
        const heading = new Heading();
        heading.render('apple');

        const appleImage = new AppleImage();
        appleImage.render();
    }
}

export default ApplePage;