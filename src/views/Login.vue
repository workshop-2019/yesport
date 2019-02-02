<template>
    <div class="login login-bg">
        <div class="container">
        <br/>
            <div class="row">
                <div class="col-md-12 ">
                    <div class="row">
                        <div class="col-md-4">
                            
                            <div class="sidenav">
                                <div class="login-main-text">
                                    <h2>Connexion</h2>
                                    <p>Login or register from here to access.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-8">
                            <div class="main">
                                <div class="col-md-12 col-sm-12">
                                    <div class="login-form">
                                    <form>
                                        <div class="form-group">
                                            <label>User Name</label>
                                            <input type="text" class="form-control" placeholder="User Name">
                                        </div>
                                        <div class="form-group">
                                            <label>Password</label>
                                            <input type="password" class="form-control" placeholder="Password">
                                        </div>
                                        <button type="submit" class="btn btn-black">Envoyer</button>
                                    </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "Login"
};
</script>

<style scoped>

body {
    font-family: "Lato", sans-serif;
}
.main-head{
    height: 150px;
    background: #FFF;
}
.sidenav {
    height: 100%;
    padding: 20px 20px;
}
.main {
    padding: 10px 10px;
    min-height:500px;
}

.login-main-text, .login-form{
    margin-top: 20%;
    padding: 60px;
    color: rgb(0, 0, 0);
}
.login{ 
    padding-top: 60px;
}

.login-main-text h2{
    font-weight: 300;
}
.btn-black{
    background-color: #000 !important;
    color: #fff;
}
</style>
