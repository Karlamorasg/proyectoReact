import React from 'react';
import '../assets/styles/Components/Blog.scss';



const Blog = () => {
    return (

        <div>





            <button className='button'> <a href="/"> Volver</a></button>


            <footer className="page-footer font-small blue pt-4">


                <div class="container-fluid text-center text-md-left">

                    {/* //</div> Grid row */}
                    <div className="row">

                        {/* <!-- Grid column --> */}
                        <div className="col-md-6 mt-md-0 mt-3">

                            {/* <!-- Content --> */}
                            <h5 className="text-uppercase">BLOG</h5>
                            <p>Los mejores trabajos y las mejores noticias sobre desarrollo en el mismo lugar.</p>

                        </div>

                    </div>



                    <div className="footer-copyright text-center py-3">La vida de un nómada digital

    </div>


                </div>

            </footer>

            <div className="card mb-3">
                <img src="https://images.pexels.com/photos/1212818/pexels-photo-1212818.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" class="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Mau Gelves</h5>
                        <p className="card-text">Un apasionado de la informática y los viajes que ayuda a emprendedores a impulsar sus ideas </p>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    </div>
</div>

<div className="card mb-3">
                <img src="https://images.pexels.com/photos/3787296/pexels-photo-3787296.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" class="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Expert Vagabond</h5>
                        <p className="card-text"> Matt is a great example of someone who turned his passion for travel into a business.</p>
                        <p className="card-text"><small className="text-muted">Last updated 25 mins ago</small></p>
                    </div>
</div>
<div className="card mb-3">
                <img src="https://images.pexels.com/photos/842554/pexels-photo-842554.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" class="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Digital Nomad Soul</h5>
                        <p className="card-text">Everything from how much money you should save before you start your new lifestyle, how to find accommodation along the way, where to get online jobs or how you can increase your productivity when working from home.</p>
                        <p className="card-text"><small className="text-muted">Last updated 45 mins ago</small></p>
                    </div>
</div>
                

                </div>
    )
}

export default Blog
