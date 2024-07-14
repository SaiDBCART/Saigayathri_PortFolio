import ayla from '/public/image/ayla.jpg';
import recruiter from '/public/image/recruiter.jpg';
import socialapps from '/public/image/socialapps.jpg';
import ledger from '/public/image/ledger.jpg';
import meat from '/public/image/meat.jpg';
export const projectsData = [
    {
        id: 1,
        name: 'DiA Recruiter',
        description: "This is about recruitment consultancy of an application consultant is to assist and support businesses and organizations in developing technological solutions. In this role, you will be looking at the specific needs and requirements of organizations and understand their business process so you can create systems or solutions that meet their needs.",
        tools: ['Nodejs', 'MongoDB', 'Angular','bootstrap'],
        role: 'Frontend Developer',
        code: '',
        demo: '',
        image: recruiter,
    },
    {
        id: 2,
        name: 'R-Dots Infomaps',
        description: 'we are creating the ledger for the huge size business account transaction details and we generate the ledger for both credit and debit transaction, working on the user interface-fronted and Rest Api all client requirement module.Worked on User interface and rest api for Reconciliation, Transaction, Transaction Sub types, Client  category and more modules.',
        tools: ["Angular","Bootstrap","TypeScript", "Mssql","Dotnet"],
        role: 'UI and Frontend Developer',
        code: '',
        demo: '',
        image: ledger,
    },
    {
        id: 3,
        name: 'Buzzheds',
        description: 'One of the social media application, that facilitates the sharing of ideas, thoughts, and information through virtual  networks and communities.Worked on Chat Module, that the message passing one user to another user with the Chat User interface in both maximized and minimized chat',
        tools: ['React', 'Bootstrap', 'SCSS', 'Express','nodejs', 'TypeScript', 'MongoDB', ],
        code: '',
        role: 'Frontend Developer & Api Creation for some module',
        demo: '',
        image: socialapps,
    },
    {
        id: 4,
        name: 'Tailing Management System',
        description: "My team and I developed a Dam Sensor based development project. It is used for data will be collected by the sensor  about current and previous condition of the dam. Sensor will Update sensors position movement and water level from dam. User will decide the dam opening and closing by the sensor information.",
        tools: [ 'React', 'Bootstrap','Material UI', 'Maps',],
        code: '',
        role: 'Frontend Developer',
        demo: '',
        image: ayla,
       
    },
    {
        id: 5,
        name: 'ERP App',
        description: "The web application, built using Angular, offers a comprehensive dashboard for managing inventory, orders, customers, and sales. It features real-time data synchronization, an intuitive user interface, and secure access controls to ensure smooth business operations.The mobile application, developed using Flutter, extends the functionality of the web app to mobile devices, providing customers with an easy-to-use platform for browsing and purchasing meats on-the-go. It supports both Android and iOS platforms, ensuring a wide reach and consistent user experience.",
        tools: [ 'Web app in Angular','PrimeNg','nodejs','Mobile app in Flutter','AndroidSDK'],
        code: '',
        role: 'Frontend Developer',
        demo: '',
        image: meat,
       
    }
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },