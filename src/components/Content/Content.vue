<template>
  <div class="content-div">
    <NavBar />

    <div class="row">
      <div class="col-lg-6 col-md-6 col-sm-12 content-intro">
        <h2>
          Food from your favourite local restuarants delivered to your door
        </h2>
        <h5>
          Order food seamlessly Or earn extra cash from delivering or manage
          your restuarant online!.
        </h5>
        <div class="button-div">
          <button
            type="button"
            class="btn bluebtn"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Get Early Access
          </button>

          <!-- Modal -->
          <div
            class="modal fade"
            id="exampleModal"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">
                    We can’t wait to show you what we have been working on!
                  </h5>
                </div>
                <div class="modal-body">
                  <div class="div-wrapper">
                    <div class="input-width" style="flex-direction: column">
                      <label for="name">Your Name:</label>
                      <div style="width: 100%">
                        <input
                          type="text"
                          name="name"
                          id="name"
                          class="border-btm"
                          placeholder="Greg Philips"
                        />
                      </div>
                    </div>
                  </div>

                  <div class="div-wrapper">
                    <div class="input-width" style="flex-direction: column">
                      <label for="name">Email Address:</label>
                      <div style="width: 100%">
                        <input
                          type="email"
                          name="email"
                          id="email"
                          class="border-btm"
                          placeholder="gregphilips@gmail.com"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn footerbtn bluebtn"
                    data-bs-dismiss="modal"
                  >
                    Get early access
                  </button>
                </div>
              </div>
            </div>
          </div>

          <button
            type="button"
            class="btn whitebtn"
            data-bs-toggle="modal"
            data-bs-target="#vendorModal"
          >
            Vendor Early Access
          </button>

          <!-- Modal -->
          <div
            class="modal fade"
            id="vendorModal"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">
                    An easy to use tool for managing your business online
                  </h5>
                </div>
                <div class="modal-body">
                  <div class="div-wrapper">
                    <div class="input-width" style="flex-direction: column">
                      <label for="name">Your Name:</label>
                      <div style="width: 100%">
                        <input
                          type="text"
                          name="name"
                          id="name"
                          class="border-btm"
                          placeholder="Greg Philips"
                        />
                      </div>
                    </div>
                  </div>

                  <div class="div-wrapper">
                    <div class="input-width" style="flex-direction: column">
                      <label for="name">Email Address:</label>
                      <div style="width: 100%">
                        <input
                          type="email"
                          name="email"
                          id="email"
                          class="border-btm"
                          placeholder="gregphilips@gmail.com"
                        />
                      </div>
                    </div>
                  </div>

                  <div class="div-wrapper">
                    <div class="input-width" style="flex-direction: column">
                      <label for="name">Business Name:</label>
                      <div style="width: 100%">
                        <input
                          type="text"
                          name="b-name"
                          id="b-name"
                          class="border-btm"
                          placeholder="Greg Foods "
                        />
                      </div>
                    </div>
                  </div>
                  <div class="div-wrapper">
                    <div class="input-width" style="flex-direction: column">
                      <label for="name">Location:</label>
                      <div style="width: 100%">
                        <input
                          type="text"
                          name="b-name"
                          id="b-name"
                          class="border-btm"
                          placeholder="Ebonyi"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn bluebtn footerbtn"
                    data-bs-dismiss="modal"
                  >
                    Get Early Access
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-6 col-md-6 col-sm-12 gallery row">
        <img src="./assets/images/img1.jpg" alt="" />

        <img src="./assets/images/img2.jpg" alt="" />

        <img src="./assets/images/img3.jpg" alt="" />

        <img src="./assets/images/img4.jpg" alt="" />
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import NavBar from "../NavBar.vue";
import Footer from "../Footer.vue";
import Content from "./Content.scss";

export default {
  name: "App",
  components: {
    NavBar,
    Footer,
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
</style>