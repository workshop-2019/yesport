<template>
    <div class="home">
        <div class="container">
        <br/>
            <div class="row">
                <div class="col-md-12">
                    <!-- carousel -->
                    <div class="row">
                        <div class="col-md-12">
                            <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                                <div class="carousel-inner">
                                    <div class="carousel-item active">
                                    <img class="d-block w-100" src="https://via.placeholder.com/1110x400" alt="First slide">
                                    </div>
                                    <div class="carousel-item">
                                    <img class="d-block w-100" src="https://via.placeholder.com/1110x400" alt="Second slide">
                                    </div>
                                    <div class="carousel-item">
                                    <img class="d-block w-100" src="https://via.placeholder.com/1110x400" alt="Third slide">
                                    </div>
                                </div>
                                <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span class="sr-only">Previous</span>
                                </a>
                                <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span class="sr-only">Next</span>
                                </a>
                            </div>    
                        </div>
                    </div>
                    <!-- bloc 1 -->
                    <div class="row">
                        
                        <div class="col-md-12 ">
                            <br/>
                            <p>Live par catégories (type de jeu par exemple) :</p>
                            <div class="row">
    
                               <div class="col-md-4 col-sm-6 col-xs-12">
                                    <div class="blog-post">
                                        <div class="post-img">
                                            <img class="img-responsive" src="../assets/bg-stadium.jpg" alt="image" width="100%">
                                        </div>    
                                        <div class="blog-details">
                                            <h4 class="media-heading">Infos sur le live</h4>
                                            <p>Lorem Ipsum adalah text contoh digun akan didalam industri pence taka types etting 
                                            adalah text contoh.</p>
                                            
                                        </div>
                                    </div>    
                                </div>    
                                <div class="col-md-4 col-sm-6 col-xs-12">
                                    <div class="blog-post">
                                        <div class="post-img">
                                            <img class="img-responsive" src="../assets/bg-stadium.jpg" alt="image" width="100%">
                                        </div>    
                                        <div class="blog-details">
                                            <h4 class="media-heading">Infos sur le live</h4>
                                            <p>Lorem Ipsum adalah text contoh digun akan didalam industri pence taka types etting 
                                            adalah text contoh.</p>
                                            
                                        </div>
                                    </div>    
                                </div>    
                                <div class="col-md-4 col-sm-6 col-xs-12">
                                    <div class="blog-post">
                                        <div class="post-img">
                                            <img class="img-responsive" src="../assets/bg-stadium.jpg" alt="image" width="100%">
                                        </div>    
                                        <div class="blog-details">
                                            <h4 class="media-heading">Infos sur le live</h4>
                                            <p>Lorem Ipsum adalah text contoh digun akan didalam industri pence taka types etting 
                                            adalah text contoh.</p>
                                            
                                        </div>
                                    </div>    
                                </div>    
                            </div>
                            <br/>
                            <p>Live par catégories (type de jeu par exemple) :</p>
                            <div>

                            </div>
                            <div class="row">
    
                               <div class="col-md-4 col-sm-6 col-xs-12">
                                    <div class="blog-post">
                                        <div class="post-img">
                                            <img class="img-responsive" src="../assets/bg-stadium.jpg" alt="image" width="100%">
                                        </div>    
                                        <div class="blog-details">
                                            <h4 class="media-heading">Infos sur le live</h4>
                                            <p>Lorem Ipsum adalah text contoh digun akan didalam industri pence taka types etting 
                                            adalah text contoh.</p>
                                            
                                        </div>
                                    </div>    
                                </div>    
                                <div class="col-md-4 col-sm-6 col-xs-12">
                                    <div class="blog-post">
                                        <div class="post-img">
                                            <img class="img-responsive" src="../assets/bg-stadium.jpg" alt="image" width="100%">
                                        </div>    
                                        <div class="blog-details">
                                            <h4 class="media-heading">Infos sur le live</h4>
                                            <p>Lorem Ipsum adalah text contoh digun akan didalam industri pence taka types etting 
                                            adalah text contoh.</p>
                                            
                                        </div>
                                    </div>    
                                </div>    
                                <div class="col-md-4 col-sm-6 col-xs-12">
                                    <div class="blog-post">
                                        <div class="post-img">
                                            <img class="img-responsive" src="../assets/bg-stadium.jpg" alt="image" width="100%">
                                        </div>    
                                        <div class="blog-details">
                                            <h4 class="media-heading">Infos sur le live</h4>
                                            <p>Lorem Ipsum adalah text contoh digun akan didalam industri pence taka types etting 
                                            adalah text contoh.</p>
                                        </div>
                                    </div>    
                                </div>    
                            </div>
                        </div>
                    </div>
                    <br />
                    <!-- footer -->
                    <div class="row">
                        <div class="col-md-12 home_footer">
                            Footer
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "Home"
};
</script>
<style scoped>
.home-carousel {
  min-height: 100%;
  width: 100%;
  height: 70vh;
}
.home_live, 
.home_footer {
    background : gray;
    height: 30vh;
}
.item_desc {
  background: gray;
}

.blog-post {
    background: gray;
}
.blog-details{
    padding: 20px 20px;
}
.blog-details h4 {
    text-align: center;
}
</style>