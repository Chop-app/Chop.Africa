<template>

  <div class="content-div">
    <NavBar />

    <div class="row">
      <div class="col-lg-7 col-md-12 col-sm-12 content-intro">
        <h2>Food from your favourite local restuarants delivered to your door</h2>
        <h5>Order food seamlessly Or earn extra cash from delivering or manage your restuarant online!.</h5>
        <div class="button-div">

          <button type="button" class="btn bluebtn" data-bs-toggle="modal" data-bs-target="#exampleModal">
            Get Early Access
          </button>

          <!-- Modal -->
          <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
            aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">We can’t wait to show you what we have been working on!
                  </h5>
                </div>
                <div class="modal-body">

                  <div class="div-wrapper">
                    <div class="input-width" style="flex-direction: column">
                      <label for="name">Your Name:</label>
                      <div style="width: 100%">
                        <input type="text" name="name" id="name" class="border-btm" placeholder="Greg Philips">
                      </div>
                    </div>
                  </div>

                  <div class="div-wrapper">
                    <div class="input-width" style="flex-direction: column">
                      <label for="name">Email Address:</label>
                      <div style="width: 100%">
                        <input type="email" name="email" id="email" class="border-btm"
                          placeholder="gregphilips@gmail.com">
                      </div>
                    </div>
                  </div>

                </div>
                <div class="modal-footer">
                  <button type="button" class="btn footerbtn bluebtn" data-bs-dismiss="modal">Get early access</button>
                </div>
              </div>
            </div>
          </div>

          <button type="button" class="btn whitebtn" data-bs-toggle="modal" data-bs-target="#vendorModal">
            Vendor Early Access
          </button>

          <!-- Modal -->
          <div class="modal fade" id="vendorModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">An easy to use tool for managing your business online
                  </h5>
                </div>
                <div class="modal-body">

                  <div class="div-wrapper">
                    <div class="input-width" style="flex-direction: column">
                      <label for="name">Your Name:</label>
                      <div style="width: 100%">
                        <input type="text" name="name" id="name" class="border-btm" placeholder="Greg Philips">
                      </div>
                    </div>
                  </div>

                  <div class="div-wrapper">
                    <div class="input-width" style="flex-direction: column">
                      <label for="name">Email Address:</label>
                      <div style="width: 100%">
                        <input type="email" name="email" id="email" class="border-btm"
                          placeholder="gregphilips@gmail.com">
                      </div>
                    </div>
                  </div>

                  <div class="div-wrapper">
                    <div class="input-width" style="flex-direction: column">
                      <label for="name">Business Name:</label>
                      <div style="width: 100%">
                        <input type="text" name="b-name" id="b-name" class="border-btm" placeholder="Greg Foods ">
                      </div>
                    </div>
                  </div>
                  <div class="div-wrapper">
                    <div class="input-width" style="flex-direction: column">
                      <label for="name">Location:</label>
                      <div style="width: 100%">
                        <input type="text" name="b-name" id="b-name" class="border-btm" placeholder="Ebonyi">
                      </div>
                    </div>
                  </div>

                </div>
                <div class="modal-footer">
                  <button type="button" class="btn bluebtn footerbtn" data-bs-dismiss="modal">Get Early
                    Access</button>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
      <div class="col-lg-5 col-md-12 col-sm-12 gallery">
        <img src="./assets/images/img1.jpg" width="150" alt="">
        <img src="./assets/images/img2.jpg" width="150" alt="">
        <img src="./assets/images/img3.jpg" width="150" alt="">
        <img src="./assets/images/img4.jpg" width="150" alt="">
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
  import NavBar from './NavBar.vue'
  import Footer from './Footer.vue'



  export default {
    name: 'App',
    components: {
      NavBar,
      Footer
    },
    data() {
      return {}
    }
  }
</script>

<style scoped>
  .content-div {
    padding: 2% 6%;
    height: 100vh;
  }

  .content-intro {
    padding: 18% 7% 2% 5%;

  }

  .content-intro h2 {
    font-weight: 600;
    line-height: 3rem;
    padding-bottom: 20px;
    color: #2D4059;
  }

  .content-intro h5 {
    color: #000000;
    font-weight: 400;
    line-height: 2rem;

  }

  .button-div {
    padding-top: 50px;
  }

  .bluebtn {
    background-color: #2d4059;
    outline: none;
    border: none;
    padding: 20px 40px;
    margin-right: 10px;
    border-radius: 5px;
    color: #fff;
  }


  .whitebtn {
    background-color: transparent;
    outline: none;
    border: 1.5px solid #2d4059;
    padding: 20px 40px;
    margin-left: 10px;
    border-radius: 5px;


  }

  .whitebtn a {
    color: #2d4059;
    font-weight: 500;
  }

  .gallery img {
    display: flex;
    flex-direction: column;
    width: 190%;
    height: 2500%;
    border-radius: 5px;
    overflow: hidden;
    background-size: contain;
    background-repeat: no-repeat;
    object-fit: cover;
  }


  .gallery {
    display: grid;
    grid-template-columns: repeat(2, 300px);
    grid-auto-rows: 430px;
    padding-top: 100px;
    margin: 0 0 0 7%;

  }

  .modal-content {
    padding: 10%;
  }

  .modal-header h5 {
    color: #2d4059;
    text-align: center;
    font-weight: 600;
  }

  .div-wrapper {
    padding: 10px;
  }

  .div-wrapper input {
    width: 100%;
    padding: 10px 20px;
    margin: 12px 0;
    border: 1.5px solid #e5e5e5;
  }

  .div-wrapper label {
    font-size: 0.8rem;
  }

  .footerbtn {
    width: 100%;
  }

  ::placeholder {
    font-size: 0.8rem;
    color-adjust: #d6d3d3 !important;
  }

  .modal-header,
  .modal-footer {
    border: none;
  }

  @media screen and (max-width:1600px) {
    .gallery {
      margin-left: 0;
    }

    .content-intro {
      padding-top: 25%;
    }
  }

  @media screen and (max-width:1400px) {
    .content-intro {
      width: 80%;
      padding: 15% 10% 7%;
      margin: 0 auto;
    }

    .gallery {
      margin: 0 auto;
      padding: 10%;
      width: 80%;

    }
  }

  @media screen and (max-width:874px) {
    .content-intro {
      padding: 15% 6% 7% !important;
    }

    .gallery {
      padding: 6% !important;

    }
  }
   @media screen and (max-width:874px) {
  .bluebtn,.whitebtn{
    margin: 20px 0;
    width: 100%;
  }
  .content-intro h2 {
font-size: 38px;
line-height: 50px;
  }
  .content-intro{
    width: 100%;
  padding: 15% 10% 7%;
  }
   .gallery {
      padding: 10%;
      width: 100%;

    }
  }
</style>