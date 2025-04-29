<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-12">
        <footer>
          <div class="row justify-content-around mb-0 pt-5 mx-4">
            <div class="col-md-12 d-flex justify-content-between">
              <ul class="list-unstyled mt-md-3 mt-5">
                <li>Job Portal</li>
                <li class="social">
                  <span>
                    <i class="fa fa-facebook" aria-hidden="true"></i
                  ></span>
                  <span>
                    <i class="fa fa-instagram" aria-hidden="true"></i>
                  </span>
                  <span>
                    <i class="fa fa-twitter" aria-hidden="true"></i>
                  </span>
                </li>
              </ul>
              <ul class="list-unstyled my-xl-4 my-md-3">
                <li>Copyright</li>
                <li>&#9400; Job Portal 2025</li>
              </ul>
            </div>
          </div>
          <div class="row justify-content-center px-3 py-3 pt-5">
            <div class="col text-center">
              <p class="mb-0">
                “I never dreamed about success. I worked for it.” — Estee Lauder
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "FooterPage",
};
</script>
<style scoped>
.container-fluid {
  position: relative;
  margin-top: 60px;
  bottom: 0;
  padding: 0;
}

.card {
  color: #383431 !important;
  background-color: #ffffff !important;
}

h5 {
  font-size: calc(
    20px + (28 - 20) * ((100vw - 360px) / (1600 - 360))
  ) !important;
}
.fa {
  cursor: pointer;
  font-size: 21px;
  margin: 5px 10px 5px 10px !important;
}

button {
  font-size: calc(
    13px + (16 - 13) * ((100vw - 360px) / (1600 - 320))
  ) !important;
  border-radius: 0 !important;
  padding-left: calc(
    20px + (28 - 20) * ((100vw - 360px) / (1600 - 360))
  ) !important;
  padding-right: calc(
    20px + (28 - 20) * ((100vw - 360px) / (1600 - 360))
  ) !important;
  padding-top: calc(
    10px + (12 - 10) * ((100vw - 360px) / (1600 - 360))
  ) !important;
  padding-bottom: calc(
    10px + (12 - 10) * ((100vw - 360px) / (1600 - 360))
  ) !important;
  background-color: #383431 !important;
  border: none !important;
}

button:focus {
  -moz-box-shadow: none !important;
  -webkit-box-shadow: none !important;
  box-shadow: none !important;
  outline-width: 0;
}

li {
  margin-top: 8px;
  margin-bottom: 8px;
}

input::-webkit-input-placeholder {
  padding-left: 5px !important;
  transform: translate3d(0, -2px, 0);
}

input::placeholder {
  vertical-align: middle !important;
  color: rgb(196, 193, 193) !important;
  font-size: calc(
    12px + (14 - 12) * ((100vw - 360px) / (1600 - 360))
  ) !important;
}

input {
  border-radius: 2px !important;
  background: transparent !important;
  color: #ffffff !important;
}

input:focus {
  -moz-box-shadow: none !important;
  -webkit-box-shadow: none !important;
  box-shadow: none !important;
  outline-width: 0;
  border-color: #ffffff !important;
}

img {
  vertical-align: middle !important;
  width: 100%;
  width: calc(30px + 6 * ((100vw - 320px) / 680)) !important;
}

li:first-child {
  font-size: 18px !important;
  font-weight: bold;
}

footer {
  background-color: #383431 !important;
  color: #ffffff !important;
}

small {
  font-size: calc(
    12px + (14 - 12) * ((100vw - 360px) / (1600 - 360))
  ) !important;
}

p {
  font-size: calc(
    12px + (14 - 12) * ((100vw - 360px) / (1600 - 360))
  ) !important;
  color: rgb(196, 193, 193) !important;
}

.social {
  position: relative;
  left: -10px;
}

.Subscribe {
  background-color: #ffffff !important;
  color: #383431 !important;
  font-weight: bold;
}

li:not(:first-child) {
  color: rgb(196, 193, 193) !important;
}
</style>
