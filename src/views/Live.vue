<template>
  <section class="section about">
    <div class="container">
      <br />
      <div class="row">
        <div class="col-md-9">
          <div class="row">
            <div class="col-md-12 live_video">
              <!-- Filler Video -->
              <iframe
                src="https://www.youtube.com/embed/E4pyzeTvFC0"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </div>
          <br />
          <div class="row">
            <div class="col-md-12">
              <div class="live_infos">
                Infos sur le live (titre, jeux, joueurs)
              </div>
            </div>
          </div>
          <br />
          <div class="row">
            <div class="col-md-6">
              <div class="live_prono">Pronostics</div>
            </div>
            <br />
            <div class="col-md-6">
              <div class="live_quiz">Quizz</div>
            </div>
            <br />
          </div>
        </div>
        <div class="col-md-3">
          <div class="row">
            <div class="col-md-12">
              <div class="live_chat">Chat</div>
            </div>
          </div>
          <br />
          <div class="row">
            <div class="col-md-12">
              <div class="live_vocal">Plateforme vocale</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
.live_chat,
.live_vocal,
.live_infos,
.live_quiz,
.live_prono {
  background: gray;
}
.live_video iframe {
  min-height: 100%;
  width: 100%;
  height: 70vh;
  padding-top: 60px;
}
.live_infos {
  height: 10vh;
  min-height: 50px;
}
.live_chat {
  padding-top: 60px;
  height: 55vh;
  min-height: 150px;
}
.live_vocal {
  height: 55vh;
  min-height: 150px;
}
.live_quiz {
  min-height: 100px;
  height: 25vh;
  margin-bottom: 1em;
}
.live_prono {
  min-height: 100px;
  height: 25vh;
  margin-bottom: 1em;
}
</style>
