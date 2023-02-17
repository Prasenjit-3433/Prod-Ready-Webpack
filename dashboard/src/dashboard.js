import NavigationBar from './components/navigation-bar/navigation-bar';

const navigationItems = [
    {
        url: '/hello-world-page',
        title: 'Hello World Page'
    },
    {
        url: '/apple-page',
        title: 'Apple Page'
    }
]

const navigationBar = new NavigationBar();
navigationBar.render(navigationItems);


const url = window.location.pathname;

if(url === '/hello-world-page') {
    import('HelloWorldApp/HelloWorldPage').then(HelloWorldPageModule => {
        const HellWorldPage = HelloWorldPageModule.default;
        const helloWorldPage = new HellWorldPage();
        helloWorldPage.render();
    });
} else if (url === '/apple-page') {
    import('AppleApp/ApplePage').then(ApplePageModule => {
        const ApplePage = ApplePageModule.default;
        const applePage = new ApplePage();
        applePage.render();
    });
}

