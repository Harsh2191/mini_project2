import React from 'react'
import ControlledCarousel from './ControlledCarousel'

export default function PublicPortal() {
  return (
    <>
 {/* ======= Top Bar =======  */}
  <div id="topbar" className="d-flex align-items-center fixed-top">
    <div className="container d-flex align-items-center justify-content-center justify-content-md-between">
      <div className="align-items-center d-none d-md-flex">
        <i className="bi bi-clock"></i> Monday - Saturday, 8AM to 10PM
      </div>
      <div className="d-flex align-items-center">
        <i className="bi bi-phone"></i> Call us now +1 5589 55488 55
      </div>
    </div>
  </div>

  {/* ======= Header =======  */}
  <header id="header" className="fixed-top">
    <div className="container d-flex align-items-center">

      <a href="index.html" className="logo me-auto"><img src="assets/img/logo.png" alt=""/></a>
      {/* Uncomment below if you prefer to use an image logo  */}
      <h1 className="logo me-auto"><a href="index.html"></a></h1> 

      <nav id="navbar" className="navbar order-last order-lg-0">
        <ul>
          <li><a className="nav-link scrollto " href="#hero">Home</a></li>
          <li><a className="nav-link scrollto" href="#about">About</a></li>
          <li><a className="nav-link scrollto" href="#services">Services</a></li>
          <li><a className="nav-link scrollto" href="#departments">Departments</a></li>
          <li><a className="nav-link scrollto" href="#doctors">Doctors</a></li>
          <li className="dropdown"><a href="#"><span>Drop Down</span> <i className="bi bi-chevron-down"></i></a>
            <ul>
              <li><a href="#">Drop Down 1</a></li>
              <li className="dropdown"><a href="#"><span>Deep Drop Down</span> <i className="bi bi-chevron-right"></i></a>
                <ul>
                  <li><a href="#">Deep Drop Down 1</a></li>
                  <li><a href="#">Deep Drop Down 2</a></li>
                  <li><a href="#">Deep Drop Down 3</a></li>
                  <li><a href="#">Deep Drop Down 4</a></li>
                  <li><a href="#">Deep Drop Down 5</a></li>
                </ul>
              </li>
              <li><a href="#">Drop Down 2</a></li>
              <li><a href="#">Drop Down 3</a></li>
              <li><a href="#">Drop Down 4</a></li>
            </ul>
          </li>
          <li><a className="nav-link scrollto" href="#contact">Contact</a></li>
        </ul>
        <i className="bi bi-list mobile-nav-toggle"></i>
      </nav>

      <a href="#appointment" className="appointment-btn scrollto"><span className="d-none d-md-inline">Make an</span> Add Member</a>

    </div>
  </header>

  {/* ======= Hero Section =======  */}
  {/* <section id="hero">
    <div id="heroCarousel" data-bs-interval="5000" className="carousel slide carousel-fade" data-bs-ride="carousel">

      <ol className="carousel-indicators" id="hero-carousel-indicators"></ol>

      <div className="carousel-inner" role="listbox">

        Slide 1 
        <div className="carousel-item active" style={{backgroundImage: "url(assets/img/slide/slide-1.jpg)"}}>
          <div className="container">
            <h2>Welcome to <span>Medicio</span></h2>
            <p>Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel.</p>
            <a href="#about" className="btn-get-started scrollto">Read More</a>
          </div>
        </div>

        Slide 2 
        <div className="carousel-item" style={{backgroundImage: "url(assets/img/slide/slide-2.jpg)"}}>
          <div className="container">
            <h2>Lorem Ipsum Dolor</h2>
            <p>Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel.</p>
            <a href="#about" className="btn-get-started scrollto">Read More</a>
          </div>
        </div>

        Slide 3 
        <div className="carousel-item" style={{backgroundImage: "url(assets/img/slide/slide-3.jpg)"}}>
          <div className="container">
            <h2>Sequi ea ut et est quaerat</h2>
            <p>Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel.</p>
            <a href="#about" className="btn-get-started scrollto">Read More</a>
          </div>
        </div>

      </div>

      <a className="carousel-control-prev" href="#heroCarousel" role="button" data-bs-slide="prev">
        <span className="carousel-control-prev-icon bi bi-chevron-left" aria-hidden="true"></span>
      </a>

      <a className="carousel-control-next" href="#heroCarousel" role="button" data-bs-slide="next">
        <span className="carousel-control-next-icon bi bi-chevron-right" aria-hidden="true"></span>
      </a>

    </div>
  </section> */}


<section id="boot">
<ControlledCarousel />
</section>



  <main id="main">

    {/* ======= Featured Services Section =======  */}
    <section id="featured-services" className="featured-services">
      <div className="container" data-aos="fade-up">

        <div className="row">
          <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
            <div className="icon-box" data-aos="fade-up" data-aos-delay="100">
              <div className="icon"><i className="fas fa-heartbeat"></i></div>
              <h4 className="title"><a href="">মানব  সেবা  </a></h4>
              <p className="description">“আকাশ ভরা সূর্য তারা, বিশ্ব ভরা প্রাণ,তাহারি মাঝখানে আমি পেয়েছি মোর স্থান,বিস্ময়ে তাই জাগে আমার গান।।</p>
            </div>
          </div>

          <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
            <div className="icon-box" data-aos="fade-up" data-aos-delay="200">
              <div className="icon"><i className="fas fa-pills"></i></div>
              <h4 className="title"><a href="">উন্নয়ন  </a></h4>
              <p className="description">“মাঝখানে আমি পেয়েছি মোর স্থান,বিস্ময়ে তাই জাগে আমার গান।।</p>
            </div>
          </div>

          <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
            <div className="icon-box" data-aos="fade-up" data-aos-delay="300">
              <div className="icon"><i className="fas fa-thermometer"></i></div>
              <h4 className="title"><a href="">শিক্ষা </a></h4>
              <p className="description">“আকাশ ভরা সূর্য তারা, বিশ্ব ভরা প্রাণ,তাহারি মাঝখানে আমি পেয়েছি মোর স্থান,বিস্ময়ে তাই জাগে আমার গান।।</p>
            </div>
          </div>

          <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
            <div className="icon-box" data-aos="fade-up" data-aos-delay="400">
              <div className="icon"><i className="fas fa-dna"></i></div>
              <h4 className="title"><a href="">কর্ম দক্ষতা</a></h4>
              <p className="description">“আকাশ ভরা সূর্য তারা, বিশ্ব ভরা প্রাণ,তাহারি মাঝখানে আমি পেয়েছি মোর স্থান,বিস্ময়ে তাই জাগে আমার গান।।</p>
            </div>
          </div>

        </div>

      </div>
    </section>

    {/* ======= Cta Section =======  */}
    <section id="cta" className="cta">
      <div className="container" data-aos="zoom-in">

        <div className="text-center">
          <h3>জরুরী দরকার ? এখনি সহযোগিতা  প্রয়োজন ?</h3>
          <p>সামাজিক কল্যাণ সম্পর্কিত প্রসঙ্গগুলি বাংলাদেশে অনেকটা দুঃখজনক। আমাদের দেশে এখনো অনেক মানুষ দারিদ্র্যের দায়িত্ব বহন করছেন এবং প্রায় সকল ক্ষেত্রে স্ত্রী ও শিশুরা এখনো পুরুষদের চেয়ে ভালবাসা পেয়েন না। একটি সুস্থ এবং সমৃদ্ধ সমাজ পেতে হলে সামাজিক কল্যাণ কার্যক্রমগুলি বেশি গুরুত্ব দিতে হবে।</p>
          <a className="cta-btn scrollto" href="#appointment">আপনার সমস্যার কথা সাবমিট করুন</a>
        </div>

      </div>
    </section> 

    {/* ======= About Us Section =======  */}
    <section id="about" className="about">
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2>দান -সেবা  সম্পর্কে </h2>
          <p>সামাজিক কল্যাণ সম্পর্কিত প্রসঙ্গগুলি বাংলাদেশে অনেকটা দুঃখজনক। আমাদের দেশে এখনো অনেক মানুষ দারিদ্র্যের দায়িত্ব বহন করছেন এবং প্রায় সকল ক্ষেত্রে স্ত্রী ও শিশুরা এখনো পুরুষদের চেয়ে ভালবাসা পেয়েন না। একটি সুস্থ এবং সমৃদ্ধ সমাজ পেতে হলে সামাজিক কল্যাণ কার্যক্রমগুলি বেশি গুরুত্ব দিতে হবে।</p>
        </div>

        <div className="row">
          <div className="col-lg-6" data-aos="fade-right">
            <img src="assets/img/about.jpg" className="img-fluid" alt=""/>
          </div>
          <div className="col-lg-6 pt-4 pt-lg-0 content" data-aos="fade-left">
            <h3>সামাজিক কল্যাণ সম্পর্কিত প্রসঙ্গগুলি বাংলাদেশে অনেকটা দুঃখজনক। আমাদের দেশে  এখনো পুরুষদের চেয়ে ভালবাসা পেয়েন না। একটি সুস্থ এবং সমৃদ্ধ সমাজ পেতে হলে সামাজিক কল্যাণ কার্যক্রমগুলি বেশি গুরুত্ব দিতে হবে।</h3>
            <p className="fst-italic">
            সামাজিক কল্যাণ সম্পর্কিত প্রসঙ্গগুলি বাংলাদেশে অনেকটা দুঃখজনক। আমাদের দেশে এখনো অনেক মানুষ দারিদ্র্যের দায়িত্ব বহন করছেন এবং প্রায় সকল ক্ষেত্রে স্ত্রী ও শিশুরা এখনো পুরুষদের চেয়ে ভালবাসা পেয়েন না। একটি সুস্থ এবং সমৃদ্ধ সমাজ পেতে হলে সামাজিক কল্যাণ কার্যক্রমগুলি বেশি গুরুত্ব দিতে হবে।
            </p>
            <ul>
              <li><i className="bi bi-check-circle"></i> সামাজিক কল্যাণ সম্পর্কিত প্রসঙ্গগুলি বাংলাদেশে অনেকটা দুঃখজনক। </li>
              <li><i className="bi bi-check-circle"></i>  আমাদের দেশে এখনো অনেক মানুষ দারিদ্র্যের দায়িত্ব বহন করছেন এবং প্রায় সকল ক্ষেত্রে স্ত্রী ও শিশুরা এখনো পুরুষদের চেয়ে ভালবাসা পেয়েন না। একটি সুস্থ এবং সমৃদ্ধ সমাজ পেতে হলে সামাজিক কল্যাণ কার্যক্রমগুলি বেশি গুরুত্ব দিতে হবে।</li>
              <li><i className="bi bi-check-circle"></i> সামাজিক কল্যাণ সম্পর্কিত প্রসঙ্গগুলি বাংলাদেশে অনেকটা দুঃখজনক।</li>
            </ul>
            <p>
            সামাজিক কল্যাণ সম্পর্কিত প্রসঙ্গগুলি বাংলাদেশে অনেকটা দুঃখজনক। আমাদের দেশে এখনো অনেক মানুষ দারিদ্র্যের দায়িত্ব বহন করছেন এবং প্রায় সকল ক্ষেত্রে স্ত্রী ও শিশুরা এখনো পুরুষদের চেয়ে ভালবাসা পেয়েন না। একটি সুস্থ এবং সমৃদ্ধ সমাজ পেতে হলে সামাজিক কল্যাণ কার্যক্রমগুলি বেশি গুরুত্ব দিতে হবে।

সামাজিক কল্যাণ প্রসঙ্গগুলি 
            </p>
          </div>
        </div>

      </div>
    </section>

    {/* ======= Counts Section =======  */}
   

   

    {/* ======= Services Section =======  */}
    <section id="services" className="services services">
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2>সেবা সমূহ </h2>
          <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
        </div>

        <div className="row">
          <div className="col-lg-4 col-md-6 icon-box" data-aos="zoom-in" data-aos-delay="100">
            <div className="icon"><i className="fas fa-heartbeat"></i></div>
            <h4 className="title"><a href="">রক্ত দান </a></h4>
            <p className="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
          </div>
          <div className="col-lg-4 col-md-6 icon-box" data-aos="zoom-in" data-aos-delay="200">
            <div className="icon"><i className="fas fa-pills"></i></div>
            <h4 className="title"><a href="">খাদ্য বণ্টন </a></h4>
            <p className="description">Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata</p>
          </div>
          <div className="col-lg-4 col-md-6 icon-box" data-aos="zoom-in" data-aos-delay="300">
            <div className="icon"><i className="fas fa-hospital-user"></i></div>
            <h4 className="title"><a href="">রাস্তাঘাট উন্নয়ন</a></h4>
            <p className="description">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
          </div>
          <div className="col-lg-4 col-md-6 icon-box" data-aos="zoom-in" data-aos-delay="100">
            <div className="icon"><i className="fas fa-dna"></i></div>
            <h4 className="title"><a href="">শিক্ষায় সহযোগিতা</a></h4>
            <p className="description">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
          </div>
          <div className="col-lg-4 col-md-6 icon-box" data-aos="zoom-in" data-aos-delay="200">
            <div className="icon"><i className="fas fa-wheelchair"></i></div>
            <h4 className="title"><a href=""> কর্ম-সংস্থান ব্যবস্থা</a></h4>
            <p className="description">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque</p>
          </div>
          <div className="col-lg-4 col-md-6 icon-box" data-aos="zoom-in" data-aos-delay="300">
            <div className="icon"><i className="fas fa-notes-medical"></i></div>
            <h4 className="title"><a href="">মাদক-নিরসন </a></h4>
            <p className="description">Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi</p>
          </div>
        </div>

      </div>
    </section>

    {/* ======= Appointment Section =======  */}
    <section id="appointment" className="appointment section-bg">
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2>সদস্য সংগ্রহ </h2>
          <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
        </div>

        <form action="forms/appointment.php" method="post" role="form" className="php-email-form" data-aos="fade-up" data-aos-delay="100">
          <div className="row">
            <div className="col-md-4 form-group">
              <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required/>
            </div>
            <div className="col-md-4 form-group mt-3 mt-md-0">
              <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required/>
            </div>
            <div className="col-md-4 form-group mt-3 mt-md-0">
              <input type="tel" className="form-control" name="phone" id="phone" placeholder="Your Phone" required/>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 form-group mt-3">
              <input type="datetime" name="date" className="form-control datepicker" id="date" placeholder="Appointment Date" required/>
            </div>
            <div className="col-md-4 form-group mt-3">
              <select name="department" id="department" className="form-select">
                <option value="">Select Department</option>
                <option value="Department 1">Department 1</option>
                <option value="Department 2">Department 2</option>
                <option value="Department 3">Department 3</option>
              </select>
            </div>
            <div className="col-md-4 form-group mt-3">
              <select name="doctor" id="doctor" className="form-select">
                <option value="">Select Doctor</option>
                <option value="Doctor 1">Doctor 1</option>
                <option value="Doctor 2">Doctor 2</option>
                <option value="Doctor 3">Doctor 3</option>
              </select>
            </div>
          </div>

          <div className="form-group mt-3">
            <textarea className="form-control" name="message" rows="5" placeholder="Message (Optional)"></textarea>
          </div>
          <div className="my-3">
            <div className="loading">Loading</div>
            <div className="error-message"></div>
            <div className="sent-message">Your appointment request has been sent successfully. Thank you!</div>
          </div>
          <div className="text-center"><button type="submit">Make an Appointment</button></div>
        </form>

      </div>
    </section> 

    {/* ======= Departments Section =======  */}
    <section id="departments" className="departments">
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2>বিভাগসমূহ</h2>
          <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
        </div>

        <div className="row" data-aos="fade-up" data-aos-delay="100">
          <div className="col-lg-4 mb-5 mb-lg-0">
            <ul className="nav nav-tabs flex-column">
              <li className="nav-item">
                <a className="nav-link active show" data-bs-toggle="tab" data-bs-target="#tab-1">
                  <h4>চিকিৎসা বিভাগ  </h4>
                  <p>Quis excepturi porro totam sint earum quo nulla perspiciatis eius.</p>
                </a>
              </li>
              <li className="nav-item mt-2">
                <a className="nav-link" data-bs-toggle="tab" data-bs-target="#tab-2">
                  <h4>কর্ম  বিভাগ </h4>
                  <p>Voluptas vel esse repudiandae quo excepturi.</p>
                </a>
              </li>
              <li className="nav-item mt-2">
                <a className="nav-link" data-bs-toggle="tab" data-bs-target="#tab-3">
                  <h4> শিক্ষা বিভাগ </h4>
                  <p>Velit veniam ipsa sit nihil blanditiis mollitia natus.</p>
                </a>
              </li>
              <li className="nav-item mt-2">
                <a className="nav-link" data-bs-toggle="tab" data-bs-target="#tab-4">
                  <h4>খাদ্য বিভাগ</h4>
                  <p>Ratione hic sapiente nostrum doloremque illum nulla praesentium id</p>
                </a>
              </li>

              <li className="nav-item mt-2">
                <a className="nav-link" data-bs-toggle="tab" data-bs-target="#tab-4">
                  <h4>বাসস্থান  বিভাগ</h4>
                  <p>Ratione hic sapiente nostrum doloremque illum nulla praesentium id</p>
                </a>
              </li>
            </ul>
          </div>
          <div className="col-lg-8">
            <div className="tab-content">
              <div className="tab-pane active show" id="tab-1">
                <h3>চিকিৎসা বিভাগ</h3>
                <p className="fst-italic">Qui laudantium consequatur laborum sit qui ad sapiente dila parde sonata raqer a videna mareta paulona marka</p>
                <img src="assets/img/departments-1.jpg" alt="" className="img-fluid"/>
                <p>Et nobis maiores eius. Voluptatibus ut enim blanditiis atque harum sint. Laborum eos ipsum ipsa odit magni. Incidunt hic ut molestiae aut qui. Est repellat minima eveniet eius et quis magni nihil. Consequatur dolorem quaerat quos qui similique accusamus nostrum rem vero</p>
              </div>
              <div className="tab-pane" id="tab-2">
                <h3> কর্ম  বিভাগ   </h3>
                <p className="fst-italic">Qui laudantium consequatur laborum sit qui ad sapiente dila parde sonata raqer a videna mareta paulona marka</p>
                <img src="assets/img/departments-2.jpg" alt="" className="img-fluid"/>
                <p>Et nobis maiores eius. Voluptatibus ut enim blanditiis atque harum sint. Laborum eos ipsum ipsa odit magni. Incidunt hic ut molestiae aut qui. Est repellat minima eveniet eius et quis magni nihil. Consequatur dolorem quaerat quos qui similique accusamus nostrum rem vero</p>
              </div>
              <div className="tab-pane" id="tab-3">
                <h3>শিক্ষা বিভাগ </h3>
                <p className="fst-italic">Qui laudantium consequatur laborum sit qui ad sapiente dila parde sonata raqer a videna mareta paulona marka</p>
                <img src="assets/img/departments-3.jpg" alt="" className="img-fluid"/>
                <p>Et nobis maiores eius. Voluptatibus ut enim blanditiis atque harum sint. Laborum eos ipsum ipsa odit magni. Incidunt hic ut molestiae aut qui. Est repellat minima eveniet eius et quis magni nihil. Consequatur dolorem quaerat quos qui similique accusamus nostrum rem vero</p>
              </div>
              <div className="tab-pane" id="tab-4">
                <h3>খাদ্য বিভাগ </h3>
                <p className="fst-italic">Qui laudantium consequatur laborum sit qui ad sapiente dila parde sonata raqer a videna mareta paulona marka</p>
                <img src="assets/img/departments-4.jpg" alt="" className="img-fluid"/>
                <p>Et nobis maiores eius. Voluptatibus ut enim blanditiis atque harum sint. Laborum eos ipsum ipsa odit magni. Incidunt hic ut molestiae aut qui. Est repellat minima eveniet eius et quis magni nihil. Consequatur dolorem quaerat quos qui similique accusamus nostrum rem vero</p>
              </div>
              <div className="tab-pane" id="tab-4">
                <h3>বাসস্থান  বিভাগ</h3>
                <p className="fst-italic">Qui laudantium consequatur laborum sit qui ad sapiente dila parde sonata raqer a videna mareta paulona marka</p>
                <img src="assets/img/departments-4.jpg" alt="" className="img-fluid"/>
                <p>Et nobis maiores eius. Voluptatibus ut enim blanditiis atque harum sint. Laborum eos ipsum ipsa odit magni. Incidunt hic ut molestiae aut qui. Est repellat minima eveniet eius et quis magni nihil. Consequatur dolorem quaerat quos qui similique accusamus nostrum rem vero</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>

    {/* ======= Testimonials Section =======  */}
    <section id="testimonials" className="testimonials">
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2>মন্তব্য </h2>
          <p>সামাজিক কল্যাণ সম্পর্কিত প্রসঙ্গগুলি বাংলাদেশে অনেকটা দুঃখজনক। আমাদের দেশে এখনো অনেক মানুষ দারিদ্র্যের দায়িত্ব বহন করছেন এবং প্রায় সকল ক্ষেত্রে স্ত্রী ও শিশুরা এখনো পুরুষদের চেয়ে ভালবাসা পেয়েন না। একটি সুস্থ এবং সমৃদ্ধ সমাজ পেতে হলে সামাজিক কল্যাণ কার্যক্রমগুলি বেশি গুরুত্ব দিতে হবে।

সামাজিক কল্যাণ প্রসঙ্গগুলি মূলত দুই ধারণার উপর ভিত্তি করে বিবেচিত হয়। প্রথমতঃ, সেই কার্যক্রমগুলি যা প্রয়োজনীয় হয় দারিদ্র মানুষদের জন্য। এসকল কার্যক্রমের মধ্যে রোগীদের চিকিৎসা, পুষ্টিকর খাদ্য ও নিরাপদ পানির সরবরাহ, শিক্ষার্থীদের বৃত্তি ও উচ্চশিক্ষা প্রদান এবং প্রবাসীদের জন্য কর্ম ও আবাসের বিনিময় সহ অন্যান্য কার্যক্রম রয়ে</p>
        </div>

        <div className="testimonials-slider swiper" data-aos="fade-up" data-aos-delay="100">
          <div className="swiper-wrapper">

            <div className="swiper-slide">
              <div className="testimonial-item">
                <p>
                  <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                  Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                  <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                </p>
                <img src="assets/img/testimonials/testimonials-1.jpg" className="testimonial-img" alt=""/>
                <h3>Saul Goodman</h3>
                <h4>Ceo &amp; Founder</h4>
              </div>
            </div>End testimonial item 

            <div className="swiper-slide">
              <div className="testimonial-item">
                <p>
                  <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                  Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.
                  <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                </p>
                <img src="assets/img/testimonials/testimonials-2.jpg" className="testimonial-img" alt=""/>
                <h3>Sara Wilsson</h3>
                <h4>Designer</h4>
              </div>
            </div>End testimonial item 

            <div className="swiper-slide">
              <div className="testimonial-item">
                <p>
                  <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                  Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.
                  <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                </p>
                <img src="assets/img/testimonials/testimonials-3.jpg" className="testimonial-img" alt=""/>
                <h3>Jena Karlis</h3>
                <h4>Store Owner</h4>
              </div>
            </div>End testimonial item 

            <div className="swiper-slide">
              <div className="testimonial-item">
                <p>
                  <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                  Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.
                  <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                </p>
                <img src="assets/img/testimonials/testimonials-4.jpg" className="testimonial-img" alt=""/>
                <h3>Matt Brandon</h3>
                <h4>Freelancer</h4>
              </div>
            </div>End testimonial item 

            <div className="swiper-slide">
              <div className="testimonial-item">
                <p>
                  <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                  Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.
                  <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                </p>
                <img src="assets/img/testimonials/testimonials-5.jpg" className="testimonial-img" alt=""/>
                <h3>John Larson</h3>
                <h4>Entrepreneur</h4>
              </div>
            </div>End testimonial item 

          </div>
          <div className="swiper-pagination"></div>
        </div>

      </div>
    </section> 

    {/* ======= Doctors Section =======  */}
    <section id="doctors" className="doctors section-bg">
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2>পরিচালক</h2>
          <p>সামাজিক কল্যাণ সম্পর্কিত প্রসঙ্গগুলি বাংলাদেশে অনেকটা দুঃখজনক। আমাদের দেশে এখনো অনেক মানুষ দারিদ্র্যের দায়িত্ব বহন করছেন এবং প্রায় সকল ক্ষেত্রে স্ত্রী ও শিশুরা এখনো পুরুষদের চেয়ে ভালবাসা পেয়েন না। একটি সুস্থ এবং সমৃদ্ধ সমাজ পেতে হলে সামাজিক কল্যাণ কার্যক্রমগুলি বেশি গুরুত্ব দিতে হবে।

সামাজিক কল্যাণ প্রসঙ্গগুলি মূলত দুই ধারণার উপর ভিত্তি করে বিবেচিত হয়। প্রথমতঃ, সেই কার্যক্রমগুলি যা প্রয়োজনীয় হয় দারিদ্র মানুষদের জন্য। এসকল কার্যক্রমের মধ্যে রোগীদের চিকিৎসা, পুষ্টিকর খাদ্য ও নিরাপদ পানির সরবরাহ, শিক্ষার্থীদের বৃত্তি ও উচ্চশিক্ষা প্রদান এবং প্রবাসীদের জন্য কর্ম ও আবাসের বিনিময় সহ অন্যান্য কার্যক্রম রয়ে</p>
        </div>

        <div className="row">

          <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
            <div className="member" data-aos="fade-up" data-aos-delay="100">
              <div className="member-img">
                <img src="assets/img/doctors/doctors-1.jpg" className="img-fluid" alt=""/>
                <div className="social">
                  <a href=""><i className="bi bi-twitter"></i></a>
                  <a href=""><i className="bi bi-facebook"></i></a>
                  <a href=""><i className="bi bi-instagram"></i></a>
                  <a href=""><i className="bi bi-linkedin"></i></a>
                </div>
              </div>
              <div className="member-info">
                <h4>Walter White</h4>
                <span>Chief Medical Officer</span>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
            <div className="member" data-aos="fade-up" data-aos-delay="200">
              <div className="member-img">
                <img src="assets/img/doctors/doctors-3.jpg" className="img-fluid" alt=""/>
                <div className="social">
                  <a href=""><i className="bi bi-twitter"></i></a>
                  <a href=""><i className="bi bi-facebook"></i></a>
                  <a href=""><i className="bi bi-instagram"></i></a>
                  <a href=""><i className="bi bi-linkedin"></i></a>
                </div>
              </div>
              <div className="member-info">
                <h4>Sarah Jhonson</h4>
                <span>Anesthesiologist</span>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
            <div className="member" data-aos="fade-up" data-aos-delay="300">
              <div className="member-img">
                <img src="assets/img/doctors/doctors-1.jpg" className="img-fluid" alt=""/>
                <div className="social">
                  <a href=""><i className="bi bi-twitter"></i></a>
                  <a href=""><i className="bi bi-facebook"></i></a>
                  <a href=""><i className="bi bi-instagram"></i></a>
                  <a href=""><i className="bi bi-linkedin"></i></a>
                </div>
              </div>
              <div className="member-info">
                <h4>William Anderson</h4>
                <span>Cardiology</span>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
            <div className="member" data-aos="fade-up" data-aos-delay="400">
              <div className="member-img">
                <img src="assets/img/doctors/doctors-3.jpg" className="img-fluid" alt=""/>
                <div className="social">
                  <a href=""><i className="bi bi-twitter"></i></a>
                  <a href=""><i className="bi bi-facebook"></i></a>
                  <a href=""><i className="bi bi-instagram"></i></a>
                  <a href=""><i className="bi bi-linkedin"></i></a>
                </div>
              </div>
              <div className="member-info">
                <h4>Amanda Jepson</h4>
                <span>Neurosurgeon</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>

    {/* ======= Gallery Section =======  */}
    <section id="gallery" className="gallery">
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2>ছবি</h2>
          <p>সামাজিক কল্যাণ সম্পর্কিত প্রসঙ্গগুলি বাংলাদেশে অনেকটা দুঃখজনক। আমাদের দেশে এখনো অনেক মানুষ দারিদ্র্যের দায়িত্ব বহন করছেন এবং প্রায় সকল ক্ষেত্রে স্ত্রী ও শিশুরা এখনো পুরুষদের চেয়ে ভালবাসা পেয়েন না। একটি সুস্থ এবং সমৃদ্ধ সমাজ পেতে হলে সামাজিক কল্যাণ কার্যক্রমগুলি বেশি গুরুত্ব দিতে হবে।

সামাজিক কল্যাণ প্রসঙ্গগুলি মূলত দুই ধারণার উপর ভিত্তি করে বিবেচিত হয়। প্রথমতঃ, সেই কার্যক্রমগুলি যা প্রয়োজনীয় হয় দারিদ্র মানুষদের জন্য। এসকল কার্যক্রমের মধ্যে রোগীদের চিকিৎসা, পুষ্টিকর খাদ্য ও নিরাপদ পানির সরবরাহ, শিক্ষার্থীদের বৃত্তি ও উচ্চশিক্ষা প্রদান এবং প্রবাসীদের জন্য কর্ম ও আবাসের বিনিময় সহ অন্যান্য কার্যক্রম রয়ে</p>
        </div>

        <div className="gallery-slider swiper">
          <div className="swiper-wrapper align-items-center">
            <div className="swiper-slide"><a className="gallery-lightbox" href="assets/img/gallery/gallery-1.jpg"><img src="assets/img/gallery/gallery-1.jpg" className="img-fluid" alt=""/></a></div>
            <div className="swiper-slide"><a className="gallery-lightbox" href="assets/img/gallery/gallery-2.jpg"><img src="assets/img/gallery/gallery-2.jpg" className="img-fluid" alt=""/></a></div>
            <div className="swiper-slide"><a className="gallery-lightbox" href="assets/img/gallery/gallery-3.jpg"><img src="assets/img/gallery/gallery-3.jpg" className="img-fluid" alt=""/></a></div>
            <div className="swiper-slide"><a className="gallery-lightbox" href="assets/img/gallery/gallery-4.jpg"><img src="assets/img/gallery/gallery-4.jpg" className="img-fluid" alt=""/></a></div>
            <div className="swiper-slide"><a className="gallery-lightbox" href="assets/img/gallery/gallery-5.jpg"><img src="assets/img/gallery/gallery-5.jpg" className="img-fluid" alt=""/></a></div>
            <div className="swiper-slide"><a className="gallery-lightbox" href="assets/img/gallery/gallery-6.jpg"><img src="assets/img/gallery/gallery-6.jpg" className="img-fluid" alt=""/></a></div>
            <div className="swiper-slide"><a className="gallery-lightbox" href="assets/img/gallery/gallery-7.jpg"><img src="assets/img/gallery/gallery-7.jpg" className="img-fluid" alt=""/></a></div>
            <div className="swiper-slide"><a className="gallery-lightbox" href="assets/img/gallery/gallery-8.jpg"><img src="assets/img/gallery/gallery-8.jpg" className="img-fluid" alt=""/></a></div>
          </div>
          <div className="swiper-pagination"></div>
        </div>

      </div>
    </section>

    {/* ======= Pricing Section =======  */}
    <section id="pricing" className="pricing">
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2>দান প্যাকেজ </h2>
          <p>সামাজিক কল্যাণ সম্পর্কিত প্রসঙ্গগুলি বাংলাদেশে অনেকটা দুঃখজনক। আমাদের দেশে এখনো অনেক মানুষ দারিদ্র্যের দায়িত্ব বহন করছেন এবং প্রায় সকল ক্ষেত্রে স্ত্রী ও শিশুরা এখনো পুরুষদের চেয়ে ভালবাসা পেয়েন না। একটি সুস্থ এবং সমৃদ্ধ সমাজ পেতে হলে সামাজিক কল্যাণ কার্যক্রমগুলি বেশি গুরুত্ব দিতে হবে।

সামাজিক কল্যাণ প্রসঙ্গগুলি মূলত দুই ধারণার উপর ভিত্তি করে বিবেচিত হয়। প্রথমতঃ, সেই কার্যক্রমগুলি যা প্রয়োজনীয় হয় দারিদ্র মানুষদের জন্য। এসকল কার্যক্রমের মধ্যে রোগীদের চিকিৎসা, পুষ্টিকর খাদ্য ও নিরাপদ পানির সরবরাহ, শিক্ষার্থীদের বৃত্তি ও উচ্চশিক্ষা প্রদান এবং প্রবাসীদের জন্য কর্ম ও আবাসের বিনিময় সহ অন্যান্য কার্যক্রম রয়ে</p>
        </div>

        <div className="row">

          <div className="col-lg-3 col-md-6">
            <div className="box" data-aos="fade-up" data-aos-delay="100">
              <h3>সাধারণ প্যাকেজ </h3>
              <h4><sup>$</sup>0<span> / month</span></h4>
              <ul>
                <li>Aida dere</li>
                <li>Nec feugiat nisl</li>
                <li>Nulla at volutpat dola</li>
                <li className="na">Pharetra massa</li>
                <li className="na">Massa ultricies mi</li>
              </ul>
              <div className="btn-wrap">
                <a href="#" className="btn-buy">Buy Now</a>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 mt-4 mt-md-0">
            <div className="box featured" data-aos="fade-up" data-aos-delay="200">
              <h3>সিলভার  প্যাকেজ</h3>
              <h4><sup>$</sup>19<span> / month</span></h4>
              <ul>
                <li>Aida dere</li>
                <li>Nec feugiat nisl</li>
                <li>Nulla at volutpat dola</li>
                <li>Pharetra massa</li>
                <li className="na">Massa ultricies mi</li>
              </ul>
              <div className="btn-wrap">
                <a href="#" className="btn-buy">Buy Now</a>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 mt-4 mt-lg-0">
            <div className="box" data-aos="fade-up" data-aos-delay="300">
              <h3>গোল্ড প্যাকেজ </h3>
              <h4><sup>$</sup>29<span> / month</span></h4>
              <ul>
                <li>Aida dere</li>
                <li>Nec feugiat nisl</li>
                <li>Nulla at volutpat dola</li>
                <li>Pharetra massa</li>
                <li>Massa ultricies mi</li>
              </ul>
              <div className="btn-wrap">
                <a href="#" className="btn-buy">Buy Now</a>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 mt-4 mt-lg-0">
            <div className="box" data-aos="fade-up" data-aos-delay="400">
              <span className="advanced">Advanced</span>
              <h3>ডায়মন্ড প্যাকেজ</h3>
              <h4><sup>$</sup>49<span> / month</span></h4>
              <ul>
                <li>Aida dere</li>
                <li>Nec feugiat nisl</li>
                <li>Nulla at volutpat dola</li>
                <li>Pharetra massa</li>
                <li>Massa ultricies mi</li>
              </ul>
              <div className="btn-wrap">
                <a href="#" className="btn-buy">Buy Now</a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>

    {/* ======= Frequently Asked Questioins Section =======  */}
    <section id="faq" className="faq section-bg">
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2>প্রায়ই জিজ্ঞাসিত প্রশ্ন</h2>
          <p>সামাজিক কল্যাণ সম্পর্কিত প্রসঙ্গগুলি বাংলাদেশে অনেকটা দুঃখজনক। আমাদের দেশে এখনো অনেক মানুষ দারিদ্র্যের দায়িত্ব বহন করছেন এবং প্রায় সকল ক্ষেত্রে স্ত্রী ও শিশুরা এখনো পুরুষদের চেয়ে ভালবাসা পেয়েন না। একটি সুস্থ এবং সমৃদ্ধ সমাজ পেতে হলে সামাজিক কল্যাণ কার্যক্রমগুলি বেশি গুরুত্ব দিতে হবে।

সামাজিক কল্যাণ প্রসঙ্গগুলি মূলত দুই ধারণার উপর ভিত্তি করে বিবেচিত হয়। প্রথমতঃ, সেই কার্যক্রমগুলি যা প্রয়োজনীয় হয় দারিদ্র মানুষদের জন্য। এসকল কার্যক্রমের মধ্যে রোগীদের চিকিৎসা, পুষ্টিকর খাদ্য ও নিরাপদ পানির সরবরাহ, শিক্ষার্থীদের বৃত্তি ও উচ্চশিক্ষা প্রদান এবং প্রবাসীদের জন্য কর্ম ও আবাসের বিনিময় সহ অন্যান্য কার্যক্রম রয়ে</p>
        </div>

        <ul className="faq-list">

          <li>
            <div data-bs-toggle="collapse" className="collapsed question" href="#faq1">দান সেবা  সংঘ কিভাবে সূচনা হয়েছিল ? <i className="bi bi-chevron-down icon-show"></i><i className="bi bi-chevron-up icon-close"></i></div>
            <div id="faq1" className="collapse" data-bs-parent=".faq-list">
              <p>
                Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.
              </p>
            </div>
          </li>

          <li>
            <div data-bs-toggle="collapse" href="#faq2" className="collapsed question">দান সেবার লক্ষ্য ও   উদ্দেশ্য কি ? ? <i className="bi bi-chevron-down icon-show"></i><i className="bi bi-chevron-up icon-close"></i></div>
            <div id="faq2" className="collapse" data-bs-parent=".faq-list">
              <p>
                Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.
              </p>
            </div>
          </li>

          <li>
            <div data-bs-toggle="collapse" href="#faq3" className="collapsed question">দান সেবা সংঘ কাদের সহযোগিতা  করে  ? <i className="bi bi-chevron-down icon-show"></i><i className="bi bi-chevron-up icon-close"></i></div>
            <div id="faq3" className="collapse" data-bs-parent=".faq-list">
              <p>
                Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Faucibus pulvinar elementum integer enim. Sem nulla pharetra diam sit amet nisl suscipit. Rutrum tellus pellentesque eu tincidunt. Lectus urna duis convallis convallis tellus. Urna molestie at elementum eu facilisis sed odio morbi quis
              </p>
            </div>
          </li>

          <li>
            <div data-bs-toggle="collapse" href="#faq4" className="collapsed question">দান সেবা সংঘের অর্থের  উৎস কি ?? <i className="bi bi-chevron-down icon-show"></i><i className="bi bi-chevron-up icon-close"></i></div>
            <div id="faq4" className="collapse" data-bs-parent=".faq-list">
              <p>
                Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.
              </p>
            </div>
          </li>

          <li>
            <div data-bs-toggle="collapse" href="#faq5" className="collapsed question">দান সেবা সংঘের সদস্য  কারা হতে পারবে ?? <i className="bi bi-chevron-down icon-show"></i><i className="bi bi-chevron-up icon-close"></i></div>
            <div id="faq5" className="collapse" data-bs-parent=".faq-list">
              <p>
                Molestie a iaculis at erat pellentesque adipiscing commodo. Dignissim suspendisse in est ante in. Nunc vel risus commodo viverra maecenas accumsan. Sit amet nisl suscipit adipiscing bibendum est. Purus gravida quis blandit turpis cursus in
              </p>
            </div>
          </li>

          <li>
            <div data-bs-toggle="collapse" href="#faq6" className="collapsed question">দান সেবা সংঘের ভবিষ্যৎ পরিকল্পনা  কি ? <i className="bi bi-chevron-down icon-show"></i><i className="bi bi-chevron-up icon-close"></i></div>
            <div id="faq6" className="collapse" data-bs-parent=".faq-list">
              <p>
                Laoreet sit amet cursus sit amet dictum sit amet justo. Mauris vitae ultricies leo integer malesuada nunc vel. Tincidunt eget nullam non nisi est sit amet. Turpis nunc eget lorem dolor sed. Ut venenatis tellus in metus vulputate eu scelerisque. Pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus faucibus. Nibh tellus molestie nunc non blandit massa enim nec.
              </p>
            </div>
          </li>

        </ul>

      </div>
    </section>

    {/* ======= Contact Section =======  */}
    <section id="contact" className="contact">
      <div className="container">

        <div className="section-title">
          <h2>যোগাযোগ </h2>
          <p>সামাজিক কল্যাণ সম্পর্কিত প্রসঙ্গগুলি বাংলাদেশে অনেকটা দুঃখজনক। আমাদের দেশে এখনো অনেক মানুষ দারিদ্র্যের দায়িত্ব বহন করছেন এবং প্রায় সকল ক্ষেত্রে স্ত্রী ও শিশুরা এখনো পুরুষদের চেয়ে ভালবাসা পেয়েন না। একটি সুস্থ এবং সমৃদ্ধ সমাজ পেতে হলে সামাজিক কল্যাণ কার্যক্রমগুলি বেশি গুরুত্ব দিতে হবে।

সামাজিক কল্যাণ প্রসঙ্গগুলি মূলত দুই ধারণার উপর ভিত্তি করে বিবেচিত হয়। প্রথমতঃ, সেই কার্যক্রমগুলি যা প্রয়োজনীয় হয় দারিদ্র মানুষদের জন্য। এসকল কার্যক্রমের মধ্যে রোগীদের চিকিৎসা, পুষ্টিকর খাদ্য ও নিরাপদ পানির সরবরাহ, শিক্ষার্থীদের বৃত্তি ও উচ্চশিক্ষা প্রদান এবং প্রবাসীদের জন্য কর্ম ও আবাসের বিনিময় সহ অন্যান্য কার্যক্রম রয়ে</p>
        </div>

      </div>

      <div>
        <iframe style={{border:0, width: "100%" ,height: "350px"}} src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621" frameBorder="0" allowFullScreen></iframe>
      </div>

      <div className="container">

        <div className="row mt-5">

          <div className="col-lg-6">

            <div className="row">
              <div className="col-md-12">
                <div className="info-box">
                  <i className="bx bx-map"></i>
                  <h3>Our Address</h3>
                  <p>A108 Adam Street, New York, NY 535022</p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="info-box mt-4">
                  <i className="bx bx-envelope"></i>
                  <h3>Email Us</h3>
                  <p>info@example.com<br/>contact@example.com</p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="info-box mt-4">
                  <i className="bx bx-phone-call"></i>
                  <h3>Call Us</h3>
                  <p>+1 5589 55488 55<br/>+1 6678 254445 41</p>
                </div>
              </div>
            </div>

          </div>

          <div className="col-lg-6">
            <form action="forms/contact.php" method="post" role="form" className="php-email-form">
              <div className="row">
                <div className="col-md-6 form-group">
                  <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required=""/>
                </div>
                <div className="col-md-6 form-group mt-3 mt-md-0">
                  <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required=""/>
                </div>
              </div>
              <div className="form-group mt-3">
                <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required=""/>
              </div>
              <div className="form-group mt-3">
                <textarea className="form-control" name="message" rows="7" placeholder="Message" required=""></textarea>
              </div>
              <div className="my-3">
                <div className="loading">Loading</div>
                <div className="error-message"></div>
                <div className="sent-message">Your message has been sent. Thank you!</div>
              </div>
              <div className="text-center"><button type="submit">Send Message</button></div>
            </form>
          </div>

        </div>

      </div>
    </section>

  </main>

  {/* ======= Footer =======  */}
  <footer id="footer">
    <div className="footer-top">
      <div className="container">
        <div className="row">

          <div className="col-lg-3 col-md-6">
            <div className="footer-info">
              <h3>দান সেবা  সংঘ</h3>
              <p>
                A108 Adam Street <br/>
                NY 535022, USA<br/><br/>
                <strong>Phone:</strong> +1 5589 55488 55<br/>
                <strong>Email:</strong> info@example.com<br/>
              </p>
              <div className="social-links mt-3">
                <a href="#" className="twitter"><i className="bx bxl-twitter"></i></a>
                <a href="#" className="facebook"><i className="bx bxl-facebook"></i></a>
                <a href="#" className="instagram"><i className="bx bxl-instagram"></i></a>
                <a href="#" className="google-plus"><i className="bx bxl-skype"></i></a>
                <a href="#" className="linkedin"><i className="bx bxl-linkedin"></i></a>
              </div>
            </div>
          </div>

          <div className="col-lg-2 col-md-6 footer-links">
            <h4>Useful Links</h4>
            <ul>
              <li><i className="bx bx-chevron-right"></i> <a href="#">Home</a></li>
              <li><i className="bx bx-chevron-right"></i> <a href="#">About us</a></li>
              <li><i className="bx bx-chevron-right"></i> <a href="#">Services</a></li>
              <li><i className="bx bx-chevron-right"></i> <a href="#">Terms of service</a></li>
              <li><i className="bx bx-chevron-right"></i> <a href="#">Privacy policy</a></li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6 footer-links">
            <h4>Our Services</h4>
            <ul>
              <li><i className="bx bx-chevron-right"></i> <a href="#">Web Design</a></li>
              <li><i className="bx bx-chevron-right"></i> <a href="#">Web Development</a></li>
              <li><i className="bx bx-chevron-right"></i> <a href="#">Product Management</a></li>
              <li><i className="bx bx-chevron-right"></i> <a href="#">Marketing</a></li>
              <li><i className="bx bx-chevron-right"></i> <a href="#">Graphic Design</a></li>
            </ul>
          </div>

          <div className="col-lg-4 col-md-6 footer-newsletter">
            <h4>Our Newsletter</h4>
            <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
            <form action="" method="post">
              <input type="email" name="email"/><input type="submit" value="Subscribe"/>
            </form>

          </div>

        </div>
      </div>
    </div>

    <div className="container">
      <div className="copyright">
        &copy; Copyright <strong><span>Medicio</span></strong>. All Rights Reserved
      </div>
      <div className="credits">
        All the links in the footer should remain intact. 
        You can delete the links only if you purchased the pro version. 
        Licensing information: https://bootstrapmade.com/license/ 
        Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/medicio-free-bootstrap-theme/ 
        Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
      </div>
    </div>
  </footer>

  <a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></a>

    </>
  )
}
