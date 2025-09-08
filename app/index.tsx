import AboutUsComponent from "./components/about_us/about_us";
import FooterComponent from "./components/home/footer";
import HomeComponent from "./components/home/home";
import NavbarComponent from "./components/navbar";
import ServicesComponent from "./components/services/services";


export function Index (){
    return (
        <body>
            <main className="flex-col items-center justify-center align-middle">
                <NavbarComponent />
                <HomeComponent />
                <AboutUsComponent />
                <ServicesComponent />
            </main>       
            <footer className="items-center justify-center align-middle">
                <FooterComponent />    
            </footer>     
        </body>
    );
}