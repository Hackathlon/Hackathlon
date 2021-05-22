<template>

    <section class="cards-container">
                    <div class="t" style="margin-top:4rem; margin-bottom:2rem;margin-left: 5%;">
                        <h2 class="title is-1">{{titre}}</h2>
                    </div>
                    <div class="row"  >
                        <div class="col-1-of-4" v-if="t1">
                            <div class="card">
                                <div class="card__side card__side--front">
                                    <div class="card__picture card__picture--1 image is-3by4 ">
                                        <img :src="require(`../assets/Img_Demarche/${i1}`)" alt = i1 />
                                    </div>
                                    <h4 class="card__heading">
                                        <span class="card__heading-span">{{t1}}</span>
                                    </h4>
                                </div>
                                <div class="card__side card__side--back">
                                    <div class="card__details u-center-text">
                                        {{s1}}
                                         <a :href="l1" class="btn-text">Learn more &rarr;</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-1-of-4" v-if="t2">
                            <div class="card">
                                <div class="card__side card__side--front">
                                    <div class="card__picture card__picture--2 image is-3by4">
                                        <img :src="require(`../assets/Img_Demarche/${i2}`)" 
                                              alt = i2 />
                                    </div>
                                    <h4 class="card__heading">
                                        <span class="card__heading-span">{{t2}}</span>
                                    </h4>
                                </div>
                                <div class="card__side card__side--back">
                                    <div class="card__details u-center-text">
                                            {{s2}}
                                         <a :href=l2 class="btn-text">Learn more &rarr;</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-1-of-4" v-if="t3">
                            <div class="card">
                                <div class="card__side card__side--front">
                                    <div class="card__picture card__picture--3 image is-3by4">
                                        <img :src="require(`../assets/Img_Demarche/${i3}`)"
                                              alt = i3 />
                                    </div>
                                    <h4 class="card__heading">
                                        <span class="card__heading-span">{{t3}}</span>
                                    </h4>
                                </div>
                                <div class="card__side card__side--back">
                                    <div class="card__details u-center-text">
                                             {{s3}}
                                         <a :href=l3 class="btn-text">Learn more &rarr;</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-1-of-4" v-if="t4">
                            <div class="card">
                                <div class="card__side card__side--front">
                                    <div class="card__picture card__picture--4 image is-3by4">
                                        <img :src="require(`../assets/Img_Demarche/${i4}`)" alt = i4 />
                                    </div>
                                    <h4 class="card__heading" >
                                        <span class="card__heading-span"> {{t4}}</span>
                                    </h4>
                                </div>
                                <div class="card__side card__side--back">
                                    <div class="card__details u-center-text">
                                         {{s4}}
                                         <a :href=l4 class="btn-text">Learn more &rarr;</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </section>

</template>

<script>

export default {
  name: 'Demarche',
  props: ['t1', 's1', 't2', 's2', 't3', 's3', 't4', 's4', 'titre', 'i1', 'i2', 'i3', 'i4','l1','l2','l3','l4'],
};

</script>

<style scoped lang="scss">

$color-primary : #45acf0d7;
$color-secondary : #093994c9;
$color-grey-light-1: #f7f7f7;
$color-grey-light-bg: #f7f7f7a8;
$color-grey-dark : #666;
$color-grey-light-2: #eee;
$color-grey-dark-2: #333;
$color-nav-list : #bbb;

$color-white : #fff;
$color-black : #000;

$grid-width: 85%;
$gutter-horizontal: 5%;
$gutter-vertical: 5%;

.cards-container::after{
        content: "";
        display: table;
        clear: both;
}

.btn-text {
    &:link,
    &:visited{
        color: $color-grey-light-2;
        display: inline-block;
        text-decoration: none;
        padding: 8px;
        margin: 2rem;
        border-radius: 2rem;
        transition: all 0.2s;
    }
    &:hover{
        background-color: $color-grey-light-2;
        color: $color-primary;
        box-shadow: 0 1rem 2rem rgba($color-black, .20);
        transform: translateY(-2px);
    }
    &:active{
        box-shadow: 0 .5rem 1rem rgba($color-black, .20);
        transform: translateY(0px);
    }
}

.row{
    max-width: $grid-width;
    margin: 0 auto;

    &:not(:last-child){
        margin-bottom: $gutter-vertical;
    }

    .col-1-of-4{
        width : calc((100% - 3* #{$gutter-horizontal}) / 4) ;
        float: left;
        &:not(:last-child){
            margin-right: $gutter-horizontal;
        }
    }

    .col-1-of-2{
        width: calc((100% - #{$gutter-horizontal}) / 2);
        float: left;
        &:not(:last-child){
            margin-right: $gutter-horizontal;
        }
    }
}

.card{
    perspective: 150rem;
    border-radius:5px;
    -moz-perspective: 150rem;
    position:relative;
    height: 20rem;
    &__side{
        border-radius: 5px;
        height: 20rem;
        transition: all .8s ease;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        backface-visibility: hidden;
        box-shadow: 0 1.5rem 4rem rgba($color-black, .15);
        overflow: hidden;

        &--front{
            background-color: $color-white;
        }

        &--back{
            transform: rotateY(-180deg);
            background-image: linear-gradient(to right bottom, $color-primary, $color-secondary);
        }
    }

    &:hover &__side--front { // equivalent to .card:hover .card__side--front
        transform: rotateY(180deg);
    }

    &:hover &__side--back { // equivalent to .card:hover .card__side--front
        transform: rotateY(0deg);
    }

    &__picture{
        background-size: cover;
        height: 23rem;

        //background-blend-mode: color-dodge;

    }

    &__heading{
        font-weight: 300;
        font-size: 2.8rem;
        text-transform: uppercase;
        color: $color-white;
        position: absolute;
        width: 80%;
        top: 10rem;
        right: auto;
        text-align: right;
    }

    &__heading-span{
        padding: 1rem;
        //box-decoration-break: clone; // not necessary but sexy
        background-image: linear-gradient(to right bottom, $color-primary, $color-secondary);
        font-size: 2rem;

    }

    &__details{
        //border-radius: 5px;
        //background-color: $color-grey-light-bg;
        color: white;
        position: absolute;
        width: 80%;
        margin: 0 10%;
        top: 8rem;
        text-align: center;

    }
}

</style>
