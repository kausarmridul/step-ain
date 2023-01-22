'use strict';
//MATCH MEDIA POINTS
/*
 * Функция получает значения matchMedia для соответствующих ширин экрана
 * @param {array} arr - массив со значениями match points
 * @return возвращается объект с булевыми значениями для матч поинтов
 */
function isMatchMediaArr(arr) {
    if (!Array.isArray(arr)) return [];
    var res = {};
    arr.forEach(function (el, i) {
        res[el] = {
            min: window.matchMedia('(min-width:' + parseInt(el, 10) + 'px)').matches,
            max: window.matchMedia('(max-width:' + parseInt(el, 10) + 'px)').matches
        }
    });
    return res;
}
var matchMediaArr = isMatchMediaArr([430, 560, 780, 990, 1250]);
// console.log(matchMediaArr);

/*
 * Плавный скролл к элементу
 * @prarm {string|jq-object} scroll_el - элемент, к которому скролить
 * @param {number} speed - скорость анимации скрола, мс
 * @param {number} offset - отступ от верха экрана, рх
 */
function scrollTo(scroll_el, speed, offset) {
    speed = speed || 800;
    offset = offset || 0;

    if ($(scroll_el).length != 0) {
        $('html, body').animate({
            scrollTop: $(scroll_el).offset().top + offset
        }, speed);
    }
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}

$(function () {

    //FIX_MENU
    const asideWrap = $('#aside');

    $(asideWrap).css('display', 'block');

    $('.js-aside-toggle').on('click', function () {
        $(asideWrap).toggleClass('js-active');
        $(asideWrap).next('.aside__overlay').fadeToggle();
    });

    //scroll menu
    $('.js-scroll-to').click(function () {
        var href = $(this).attr('href');
        scrollTo(href, 800);
        $(asideWrap).removeClass('js-active');
        $(asideWrap).next('.aside__overlay').fadeOut();
        return false;
    });


    //TOP TABS
    const topTabs = $('.js-top-types')
    if (topTabs.length) {
        const $pic = $(topTabs).find('.js-top-types-pic img')
        const $label = $(topTabs).find('.js-top-types-label')
        const $tabs = $(topTabs).find('.js-top-types-tabs')

        let tl = gsap.timeline();
        const $mainPic1 = $('#top .js-top-pic-1')
        const $mainPic2 = $('#top .js-top-pic-2')
        // const $mainPic3 = $('#top .js-top-pic-3')
        const links = $($tabs).find('a')

        $($tabs).on('click', 'a', function (e) {
            e.preventDefault()

            if ($(this).hasClass('active')) return;

            const currIndex = $(links).index($(this))

            $(links).removeClass('active')
            $(this).addClass('active')

            const img = $(this).attr('data-img')
            const label = $(this).attr('data-label')

            $($pic).fadeOut(200)
            $($label).fadeOut(200, function () {
                $($pic).attr('src', img)
                $($pic).fadeIn(200)

                $($label).text(label)
                $($label).fadeIn(200)
            })

            tl.addLabel('ch1')
                .to($mainPic1, {
                    x: '-100vw',
                    opacity: 0
                }, 'ch1')
                // .to($mainPic3, {opacity: 0}, 'ch1')
                .to($mainPic2, {
                    x: '100vw',
                    opacity: 0,
                    onComplete: function () {
                        changeImages(currIndex)
                    }
                }, 'ch1')
                .addLabel('ch2')
                .to($mainPic1, {
                    x: '0vw',
                    opacity: 1
                }, 'ch2')
                .to($mainPic2, {
                    x: '0vw',
                    opacity: 1
                }, 'ch2')
            // .to($mainPic3, {opacity: 1}, 'ch2')
        })

        function changeImages(index) {
            let img1 = (matchMediaArr[1250].min) ? '<img alt="" src="img/top/pic-' + (index + 1) + '@2x.png" width="751" height="650">' : '<img alt="" src="img/top/pic-' + (index + 1) + '.png" width="751" height="650">';
            $($mainPic1).html(img1);
            // $($mainPic3).html(img1);

            let img2 = '<img alt="" src="img/top/img-' + (index + 1) + '.png">';
            $($mainPic2).html(img2);
        }
    }


    //ACTIVITY HOVER
    const activity = $('#activity')
    if (activity.length) {
        const cards = $(activity).find('.activity__card')

        if (matchMediaArr[1250].max) {
            //for mobile
            $(cards).on('mouseenter', function () {
                const th = $(this)
                const index = $(cards).index(th)

                if (index % 2 == 0) {
                    $(cards).eq(index + 1).addClass('move_right')
                    $(th).addClass('move_right_half')
                } else {
                    $(cards).eq(index - 1).addClass('move_left')
                    $(th).addClass('move_left_half')
                }
            })
            $(cards).on('mouseleave', function () {
                const th = $(this)
                const index = $(cards).index(th)

                if (index % 2 == 0) {
                    $(cards).eq(index + 1).removeClass('move_right')
                    $(th).removeClass('move_right_half')
                } else {
                    $(cards).eq(index - 1).removeClass('move_left')
                    $(th).removeClass('move_left_half')
                }
            })
        } else {
            //for desktop
            $(cards).on('mouseenter', function () {
                const th = $(this)
                const index = $(cards).index(th)

                if (index == 0) {

                } else if (index == 1) {
                    $(cards).eq(0).addClass('move_left_half')
                    $(cards).eq(2).addClass('move_right_half')
                    $(cards).eq(3).addClass('move_right_half')
                } else if (index == 2) {
                    $(cards).eq(3).addClass('move_right_quarter')
                } else {
                    $(cards).eq(0).addClass('move_left_half')
                    $(cards).eq(1).addClass('move_left_half')
                    $(cards).eq(2).addClass('move_left_half')
                    $(cards).eq(3).addClass('move_left_quarter')
                }

            })
            $(cards).on('mouseleave', function () {
                // const th = $(this)
                $(cards).removeClass('move_left_half')
                    .removeClass('move_right_half')
                    .removeClass('move_left_quarter')
                    .removeClass('move_right_quarter')
            })
        }
    }


    //FEATURES
    const features = $('#features')
    if (features.length) {
        var swiper = new Swiper($(features).find('.js-slider')[0], {
            // spaceBetween: 30,
            mousewheel: {
                releaseOnEdges: true
            },
            lazy: true,
            slidesPerView: "auto",
            grabCursor: true,
        });
    }


    //MARKET
    const market = $('#market')
    if (market.length) {
        const tabs = $('#market-tabs')
        const tabsLinks = $(tabs).find('.js-market-link')
        const tabsItems = $(tabs).find('.js-market-tab')
        const moveMouse = $(tabs).find('.js-animate-move-mouse')

        $(tabsLinks).eq(0).addClass('active')

        $(tabsItems).hide()
        $(tabsItems).eq(0).show()

        $(tabsLinks).on('click', function (e) {
            e.preventDefault()

            if ($(this).hasClass('active')) return;

            $(tabsLinks).removeClass('active')
            $(this).addClass('active')

            $(tabsItems).hide()
            $($(this).attr('href')).fadeIn(300)
        })

        if (matchMediaArr[1250].min) {
            $(market).on('mousemove', function (e) {
                let x = e.clientX / window.innerWidth;
                let y = e.clientY / window.innerHeight;
                $(moveMouse).css({
                    transform: 'translate(-' + x * 6 + '%, -' + y * 6 + '%)'
                })
            })
        }

    }


    //ROADMAP
    const roadmap = $('#roadmap')
    if (roadmap.length) {
        var swiper = new Swiper($(roadmap).find('.js-slider')[0], {
            // spaceBetween: 30,
            mousewheel: {
                releaseOnEdges: true
            },
            lazy: true,
            slidesPerView: "auto",
            grabCursor: true,
        });
    }


    //COMMUNITY
    const $community = $('#s-community')
    if ($community.length) {
        if (matchMediaArr[1250].min) {
            const moveMouse = $($community).find('.js-animate-move-mouse')

            $.each(moveMouse, function (i, item) {
                $($community).on('mousemove', function (e) {
                    let x = e.clientX / window.innerWidth;
                    let y = e.clientY / window.innerHeight;
                    $(item).css({
                        transform: 'translate(-' + x * 6 * (i * .3 + .2) + '%, -' + y * 6 * (i * .3 + 0.2) + '%)'
                    })
                })
            })
        }
    }


    const types = $('#types')
    if (types.length) {
        const slider = $(types).find('.js-slider')
        const tabsLink = $(types).find('.js-types-tabs .js-types-link')

        const swiper = new Swiper(slider[0], {
            slidesPerView: "auto",
            loop: true,
            mousewheel: {
                releaseOnEdges: true
            },
            on: {
                init: function (swiper) {
                    $(tabsLink).eq(swiper.realIndex).addClass('active')
                },
                slideChange: function (swiper) {
                    $(tabsLink).removeClass('active')
                    $(tabsLink).eq(swiper.realIndex).addClass('active')
                }
            },
        });

        $(tabsLink).on('click', function (e) {
            e.preventDefault()

            if ($(this).hasClass('active')) return;

            const index = $(tabsLink).index($(this))
            swiper.slideTo(index)
        })
    }


    const levels = $('#levels')
    if (levels.length) {
        const slider = $(levels).find('.js-slider')
        const tabsLink = $(levels).find('.js-levels-tabs .js-levels-link')

        const swiper = new Swiper(slider[0], {
            effect: 'fade',
            fadeEffect: {
                crossFade: true,
            },
            speed: 500,
            on: {
                init: function (swiper) {
                    $(tabsLink).eq(swiper.realIndex).addClass('active')
                },
                slideChange: function (swiper) {
                    $(tabsLink).removeClass('active')
                    $(tabsLink).eq(swiper.realIndex).addClass('active')
                }
            },
        });

        $(tabsLink).on('click', function (e) {
            e.preventDefault()

            if ($(this).hasClass('active')) return;

            const index = $(tabsLink).index($(this))
            swiper.slideTo(index)
        })
    }


    //REWARDS
    const rewards = $('#rewards')
    if (rewards.length) {
        const $pic = $(rewards).find('.rewards__pic')

        for (let i = 0; i < 50; i++) {
            const $i = $('<i />')
            $i.css({
                transform: 'scale(' + (Math.random() + .3).toFixed(1) + ') rotate(' + (Math.random() * 360).toFixed(1) + 'deg)'
            })
            const $span = $('<span />', {
                class: 'c'
            })
            $span.css({
                left: getRandomIntInclusive(-20, 130) + '%',
                animationDuration: (Math.random() * 10 + 5) + 's',
                animationDelay: (Math.random() * 10) + 's'
            })

            $($span).html($i)
            $($pic).append($span)
        }
    }


    //SHARE
    const share = $('#share')
    if (share.length) {
        const slider = $(share).find('.js-slider')
        let curr = 0
        const speed = 6000
        let timeout = false;

        const items = $(share).find('.share__item')
        $.each(items, function (i, item) {
            const w = $(item).width()
            const h = $(item).height()
            const radius = $(item).css('border-radius')

            const s = (w + h) * 2

            const rect = '<rect x="0" y="0" width="' + w + '" height="' + (h + 2) + '" rx="' + radius + '" ry="' + radius + '"></rect>'

            const svg = '<svg class="svg-' + i + '" viewBox="0 0 ' + w + ' ' + (h + 2) + '" stroke-dasharray="' + parseInt(s, 10) + '" stroke-dashoffset="' + parseInt(s, 10) + '">' + rect + '</svg>'

            $(item).append(svg)
        })

        const swiper = new Swiper(slider[0], {
            loop: true,
            allowTouchMove: false,
            infinity: false
            // on: {
            // 	init: function (swiper) {
            // 		moveSlide(index, swiper)
            // 	},
            // },
        });

        $(items).on('click', function () {
            const theIndex = $(items).index($(this))
            if (curr == theIndex) return;

            curr = theIndex
            clearTimeout(timeout)
            swiper.slideTo(theIndex + 1)
            moveSlide(theIndex, swiper)
        })



        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: share[0],
                start: 'top 50%'
            }
        });
        tl.from($(share).find('.js-fade-left'), {
                opacity: 0,
                xPercent: 100,
                duration: .3
            })
            .from($(share).find('.js-fade-up'), {
                opacity: 0,
                y: 100,
                duration: .3,
                stagger: .15
            })
            .from($(share).find('.js-fade-left-2'), {
                opacity: 0,
                xPercent: 100,
                duration: .3,
                stagger: .15,
                onComplete: function () {
                    moveSlide(curr, swiper)
                }
            })
            .from($('#s-share .js-fade-right-2'), {
                opacity: 0,
                xPercent: -100,
                duration: .3,
                stagger: .15
            })

        function moveSlide(index, swiper) {

            $.each(items, function (i, item) {
                if (index == i) {
                    const svg = $(item).find('svg')

                    svg.css({
                        strokeDashoffset: 0,
                        transitionDuration: speed + 'ms'
                    })
                } else {
                    const svg = $(item).find('svg')
                    const offset = svg.attr('stroke-dashoffset')
                    svg.css({
                        strokeDashoffset: offset,
                        transitionDuration: '0ms'
                    })
                }
            })


            timeout = setTimeout(() => {
                curr = (++curr < 3) ? curr : 0
                moveSlide(curr, swiper)
                swiper.slideTo(curr + 1)
            }, speed);

        }

    }


    const token = $('#token')
    if (token.length) {
        const slider = $(token).find('.js-slider')

        const swiper = new Swiper(slider[0], {
            slidesPerView: "auto",
            loop: false,
            mousewheel: {
                // releaseOnEdges: true
            },
            on: {
                init: function (swiper) {
                    if (matchMediaArr[1250].min) {
                        swiper.slideTo(4)
                    }
                }
            }
        });

    }


    const tokenomics = $('#tokenomics')
    if (tokenomics.length) {
        const sectors = $(tokenomics).find('.svg g')
        const labels = $(tokenomics).find('.tokenomics__label')
        const lis = $(tokenomics).find('.tokenomics__list li')

        $(sectors).on('mouseenter', function () {
            const index = $(sectors).index($(this))

            $(labels).eq(index).addClass('show')
            $(lis).addClass('hide')
            $(lis).eq(index).removeClass('hide')
        })
        $(sectors).on('mouseleave', function () {
            $(labels).removeClass('show')
            $(lis).removeClass('hide')
        })

        $(lis).on('mouseenter', function () {
            const index = $(lis).index($(this))

            $(this).siblings('li').addClass('hide')
            $(labels).eq(index).addClass('show')
            $(sectors).eq(index).addClass('show')
        })
        $(lis).on('mouseleave', function () {
            $(labels).removeClass('show')
            $(sectors).removeClass('show')
            $(lis).removeClass('hide')
        })
    }

    // const $sectionSubtitles = $('.js-section-subtitle')
    // $.each($sectionSubtitles, function(i, subtitle){

    // 	let oldtext = $(subtitle).text()
    // 	let newstr = ''

    // 	for(let i = 0; i < oldtext.length; i++){
    // 		newstr += '<i data-content="'+ oldtext[i] +'">'+ (oldtext[i] == ' ' ? '&nbsp;' : oldtext[i]) +'</i>'
    // 	}

    // 	$(subtitle).html(newstr)
    // })




    //LIBS
    svg4everybody(); //supports svg-sprites in IE/edge

    //ленивая загрузка с viewport-ом   https://github.com/verlok/lazyload
    var lazyLoadInstance = new LazyLoad({
        elements_selector: ".lazy"
    });
});