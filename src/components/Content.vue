<template>

  <div class="container-fluid">
    <NavBar />

    <div class="row">
      <div class="col-lg-7 col-md-6 col-sm-12 content-intro">
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
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  ...
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
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
                      <label class="label label-my ">Email<span class="ml-1" style="color: red">*</span></label>
                      <div style="width: 100%">
                        <v-text-field class="input" v-model="waitingData.email" outlined hide-details
                          placeholder="John@example.com" type="email" />
                      </div>
                    </div>
                  </div>
                  
                    <form action="" class="full-form">
                      <label for="name">Your Name:</label> <input type="text" name="name" id="name" class="border-btm"
                        placeholder="Greg Philips"> <br>
                      <label for="name">Email Address:</label>
                      <input type="email" name="email" id="email" class="border-btm"
                        placeholder="gregphilips@gmail.com">
                      <br>
                      <label for="name">Business Name:</label>
                      <input type="text" name="b-name" id="b-name" class="border-btm" placeholder="Greg Foods ">
                      <label for="name">Location:</label>
                      <input type="text" name="b-name" id="b-name" class="border-btm" placeholder="Ebonyi">
                    </form>
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
        <div class="col-lg-5 col-md-6 col-sm-12 gallery">
          <img src="../assets/img1.jpg" width="150" alt="">
          <img src="../assets/img2.jpg" width="150" alt="">
          <img src="../assets/img3.jpg" width="150" alt="">
          <img src="../assets/img4.jpg" width="150" alt="">



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
    }
  }
</script>

<style scoped>
  .container-fluid {
    padding: 2% 6%;
  }

  .content-intro {
    padding: 18% 7% 2% 5%;
    width: 50% !important;

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
    width: 272.73px;
    height: 360px;
    border-radius: 5px;
    overflow: hidden;
    background-size: contain;
    background-repeat: no-repeat;
    object-fit: cover;
  }


  .gallery {
    display: grid;
    grid-template-columns: repeat(2, 280px);
    grid-auto-rows: 400px;
    gap: 20px 50px;
    padding-top: 100px;
    margin: 0 0 0 7%;
  }

  .modal-content {
    padding: 15% 10%;
  }

  .modal-header h5 {
    color: #2d4059;
    text-align: center;
    font-weight: 600;
  }

  /* .footerbtn{
    width: 100%;
  } */
</style>