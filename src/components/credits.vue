<template>
    <div class="grid">
        <div class="col">
            <h1>smart outfit</h1>
            <p>owned by dulavai</p>
        </div>
        <div class="col">
            <h1>contact us</h1>
            <ul>
                <li>hasanur23910@gmail.com</li>
                <li>017143319XXX</li>
                <li>bangladesh,tangail,idk</li>
            </ul>
        </div>
        <div class="col">
            <h1>quick links</h1>
            <router-link to="/admin">admin page</router-link>
        </div>
        <div class="col">
            <h1>Social page</h1>
            <ul>
                <li>
                    <a href="">facebook</a>
                </li>
                <li>
                    <a href="">twitter</a>
                </li>
                <li>
                    <a href="">instagram</a>
                </li>
                <li>
                    <a href="">youtube</a>
                </li>
            </ul>
        </div>
    </div>
    <div class="bottom">made by hasan</div>
</template>
<script>
export default {

}
</script>
<style scoped lang="scss">
.grid{
    margin-top: 150px;
    min-height: 300px;
    padding:0px 10px;
    gap:20px;
    background-color: #363636;
    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(300px,1fr));
    grid-template-rows: repeat(auto-fit,minmax(100px,1fr));
    h1{
        font-size: clamp(18px,3vw,40px); 
       margin-bottom: 10px;
    }
}
.bottom{
    width: 100vw;
    background-color: #00bd7e;
    color: rgb(255, 255, 255);
    display: flex;
    justify-content: center;
    align-items: center;
    height: 30px;
}
</style>