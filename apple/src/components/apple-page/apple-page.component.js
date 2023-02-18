import Heading from '../heading/heading';
import AppleImage from '../apple-image/apple-image';

class ApplePage {
    render() {
        const heading = new Heading();
        heading.render('apple');

        const appleImage = new AppleImage();
        appleImage.render();

        import('ImageCaptionApp/ImageCaption').then(ImageCaptionModule => {
            const ImageCaption = ImageCaptionModule.default;
            const imageCaption = new ImageCaption();
            imageCaption.render('Apple is oval, about the size of a large egg.')
        })
    }
}

export default ApplePage;