import React, { useEffect } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Aos from 'aos';

const NavHeader = () => {
   
    useEffect(()=> {
        Aos.init({

        })

        const Navibar = document.querySelector(".navbar");
        const NavbarToggler = document.querySelector("#app-navbar-toggler");
        const NavBarPosition = Navibar.offsetTop;
        NavbarToggler.addEventListener("click", ()=> {
            Navibar.classList.add('fixed-top');  
        })

        window.addEventListener("scroll",()=> {

            const PagePosition = window.pageYOffset;


            if(PagePosition > NavBarPosition)
            {
                Navibar.classList.add('fixed-top');   
            }else 
            {
                
                Navibar.classList.remove('fixed-top');
            }
         
        });

        
    })

    const linkItemHandle = (to,name, index) => {
        return (
            <Nav.Item key={index} as='li'>
                <NavLink 
                data-aos='fade-right'
                data-aos-easing="linear"
                data-aos-duration={index *100 + 1200}
                data-aos-delay= {(index*500)+1590}
                to={to} className='nav-link scrollto'>{name}</NavLink>
             </Nav.Item>
        )
    }

    const LinkList = [ { to:'/',name: 'Home'

                    }, {to:'/About-us',name: 'About us'

                    }, {to:'/ser',name: 'Services'

                    },{ to:'/dep',name: 'Department'

                    },{ to:'/doc',name: 'Doctors'
                    },
                    {   to:'/sign',name: 'Signin'
                    },{
                        to:'/sign',name: 'Signup' }
                    ,{
                       to:'/contact',name: 'contact' }
                    ];
    const linknav = LinkList.map((link, index)=> {
        return linkItemHandle(link.to , link.name, index)
    })

  return (
    <>
    <header className='navbar-header'>

    <Navbar expand="md" bg="light" variant="light" className='top-navigation shadow'>
        <Navbar.Brand className='ms-4 hstack gap-2'>
        <a rel="noopener noreferrer" href='https://github.com/mrwilbroad' 
         target='_blank'>
            <i className="fab fa-instagram"></i>
        </a>

        <a rel="noopener noreferrer" href='https://github.com/mrwilbroad' 
        target='_blank' to="">
            <i className="fab fa-facebook"></i>
        </a>

        <a rel="noopener noreferrer" href='https://github.com/mrwilbroad' 
        target='_blank'>
        <i className="fab fa-github"></i>
        </a>

        <a rel="noopener noreferrer" href='https://github.com/mrwilbroad' 
        target='_blank'>
        <i className="fab fa-linkedin"></i>
        </a>


        <a rel="noopener noreferrer" href='https://github.com/mrwilbroad' 
        target='_blank'>
            <i className="fab fa-twitter"></i>
        </a>

        
        </Navbar.Brand>
        <Navbar.Toggle as='span' id='app-navbar-toggler'/>
        
        <Container as='section'>
    <Navbar.Collapse>
        <Nav as="ul"  className='text-uppercase  ms-auto'>
               {linknav}
        </Nav>
    </Navbar.Collapse>
    </Container>
    </Navbar>
  </header>
 
    </>
   
  )


}


export default NavHeader;
