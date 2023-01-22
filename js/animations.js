$(function () {

    //TOP
    const $top = $('#top')
    if ($top.length) {
        let tl = gsap.timeline();
        let yPath = 0

        let tl2 = gsap.timeline({
            scrollTrigger: {
                trigger: $top[0],
                endTrigger: '#s-info',
                start: "top top", // when the top of the trigger hits the top of the viewport
                end: "bottom bottom",
                scrub: 2, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
            }
        });

        tl.to($($top).find('.js-top-title'), {
                opacity: 1,
                y: 0,
                duration: 0.3
            })
            .to($($top).find('.js-top-btn'), {
                opacity: 1,
                y: 0,
                duration: 0.3,
                stagger: .1
            })
            .to($($top).find('.js-logo'), {
                opacity: 1,
                y: 0,
                duration: 0.2
            })
            .to($($top).find('.js-toggle'), {
                opacity: 1,
                y: 0,
                duration: 0.2
            })
            .to($($top).find('.js-title'), {
                opacity: 1,
                y: 0,
                duration: 0.2
            })
            .to($($top).find('.js-top-types'), {
                opacity: 1,
                x: 0,
                duration: 0.2
            })
            .to($($top).find('.header .menu__item'), {
                opacity: 1,
                y: 0,
                duration: 0.2,
                stagger: .1
            })
            .addLabel('decor')
            .to($($top).find('.header .decor__item'), {
                opacity: 1,
                y: 0,
                duration: 0.2,
                stagger: .1
            }, 'decor')
            .to($($top).find('.stars__item'), {
                opacity: 1,
                y: 0,
                duration: 0.2,
                stagger: .1
            }, 'decor')
            .addLabel('images')
            .to($($top).find('.js-top-image-1'), {
                opacity: 1,
                y: 0,
                duration: 0.3,
                onComplete: function () {

                    if (matchMediaArr[1250].min) {
                        yPath = $($top).find('.top__info-pic').offset().top + 100
                        tl2.to($($top).find('.js-top-image-1-1'), {
                            y: yPath /*'75vw',*/ ,
                            x: '60vw',
                            rotate: '5deg',
                            scale: 2
                        })

                        moveToMouse($top)
                    }

                }
            }, 'images')
            .to($($top).find('.js-top-image-2'), {
                opacity: 1,
                x: 0,
                duration: 0.3
            }, 'images')

    }


    //TOP 2
    const $top2 = $('#top-2')
    if ($top2.length) {
        let tl = gsap.timeline();

        tl.to($($top2).find('.js-top-title'), {
                opacity: 1,
                y: 0,
                duration: 0.3
            })
            .to($($top2).find('.js-logo'), {
                opacity: 1,
                y: 0,
                duration: 0.2
            })
            .to($($top2).find('.js-toggle'), {
                opacity: 1,
                y: 0,
                duration: 0.2
            })
            .to($($top2).find('.header .menu__item'), {
                opacity: 1,
                y: 0,
                duration: 0.2,
                stagger: .1
            })
            .to($($top2).find('.header .decor__item'), {
                opacity: 1,
                y: 0,
                duration: 0.2,
                stagger: .1
            })
            .to($($top2).find('.top-2__app'), {
                opacity: 1,
                y: 0,
                rotate: -20,
                duration: 0.4,
                onComplete: moveBikes
            })

        if (matchMediaArr[1250].min) {
            tl.to($($top2).find('.money img'), {
                opacity: 1,
                scale: 1,
                duration: 0.2,
                stagger: .1
            })
        }

        function moveBikes() {
            $($top2).find('.top-2__pics').addClass('active')
            $($top2).find('.js-app').addClass('active')

            setTimeout(() => {
                new ActiveApp($($top2).find('.js-app'), [9, 11])
            }, 1000);
        }


    }

    function ActiveApp($app, speedwalk) {
        let curr = 0;
        let timeSec = 0;
        let timeMin = 0;

        _go()

        function _go() {
            curr++;
            $($app).find('.js-speed').text(getRandomIntInclusive(speedwalk[0], speedwalk[1]))
            $($app).find('.js-bits').text(1 + 2 * (curr - 1))
            $($app).find('.js-left').text((curr / 10).toFixed(1))

            if (++timeSec >= 60) {
                timeMin++
                timeSec = 0
            }

            $($app).find('.js-right').text(String(timeMin).padStart(2, '0') + ':' + String(timeSec).padStart(2, '0'))

            setTimeout(() => {
                _go()
            }, 1000);
        }
    }


    //TOP 3
    const $top3 = $('#top-3')
    if ($top3.length) {
        let tl = gsap.timeline();

        tl.to($($top3).find('.js-top-title'), {
                opacity: 1,
                y: 0,
                duration: 0.3
            })
            .to($($top3).find('.js-logo'), {
                opacity: 1,
                y: 0,
                duration: 0.2
            })
            .to($($top3).find('.js-toggle'), {
                opacity: 1,
                y: 0,
                duration: 0.2
            })
            .to($($top3).find('.header .menu__item'), {
                opacity: 1,
                y: 0,
                duration: 0.2,
                stagger: .1
            })
            .to($($top3).find('.header .decor__item'), {
                opacity: 1,
                y: 0,
                duration: 0.2,
                stagger: .1
            })
            .to($($top3).find('.js-app'), {
                opacity: 1,
                y: 0,
                rotate: -20,
                duration: 0.4,
                onComplete: function () {

                    if (matchMediaArr[1250].min) {
                        moveToMouse($top3)
                    }

                }
            })
            .to($($top3).find('.js-fade-up'), {
                opacity: 1,
                y: 0,
                duration: 0.2,
                stagger: .1
            })
            .to($($top3).find('.js-fade'), {
                opacity: 1,
                duration: 0.2,
                stagger: .1
            })


        if (matchMediaArr[1250].min) {
            tl.to($($top3).find('.money img'), {
                opacity: 1,
                scale: 1,
                duration: 0.2,
                stagger: .1
            })
        }

    }


    //TOP MARQUE
    const $topMarque = $('#top-marque')
    if ($topMarque.length) {
        const wrap = $($topMarque).find('.top__marque-wrap')
        const stars = $(wrap).find('.js-star')
        const tlOptions = {
            scrollTrigger: {
                trigger: $topMarque[0],
                start: "bottom 95%", // when the top of the trigger hits the top of the viewport
                scrub: 2, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
            }
        }
        let tl = gsap.timeline(tlOptions);
        let tl2 = gsap.timeline(tlOptions);
        tl.from(wrap, {
            xPercent: 100
        })
        tl2.from(stars, {
            rotate: 3600
        })
    }


    //WATCH
    const $watch = $('#watch')
    if ($watch.length) {
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: $watch[0],
                start: 'top 40%'
            }
        });

        tl.from($($watch).find('.js-title'), {
                opacity: 0,
                yPercent: 100,
                duration: .3
            })
            .from($($watch).find('.js-text'), {
                opacity: 0,
                yPercent: 100,
                duration: .3
            })
            .from($($watch).find('.js-watch'), {
                opacity: 0,
                xPercent: -100,
                duration: .3
            }, '-=.3')

            .to($($watch).find('.js-watch'), {
                x: -3,
                y: -1,
                duration: .1
            })
            .to($($watch).find('.js-watch'), {
                x: 3,
                y: 1,
                duration: .1
            })
            .to($($watch).find('.js-watch'), {
                x: -3,
                y: -1,
                duration: .1
            })
            .to($($watch).find('.js-watch'), {
                x: 3,
                y: 1,
                duration: .1
            })
            .to($($watch).find('.js-watch'), {
                x: -3,
                y: -1,
                duration: .1
            })
            .to($($watch).find('.js-watch'), {
                x: 0,
                y: 0,
                duration: .1
            })

            .from($($watch).find('.js-message'), {
                opacity: 0,
                yPercent: 100,
                duration: .2,
                stagger: 0.2
            })

    }


    //WATCH 2
    const $watch2 = $('#watch-2')
    if ($watch2.length) {
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: $watch2[0],
                start: 'top 40%'
            }
        });

        tl.from($($watch2).find('.js-title'), {
                opacity: 0,
                yPercent: 100,
                duration: .3
            })
            .from($($watch2).find('.js-text'), {
                opacity: 0,
                yPercent: 100,
                duration: .3
            })
            .from($($watch2).find('.js-app'), {
                opacity: 0,
                yPercent: 100,
                duration: .3
            }, '-=.3')
            .addLabel('rotate')
            .from($($watch2).find('.js-gift'), {
                rotate: -27.6,
                duration: .3
            }, 'rotate')
            .from($($watch2).find('.js-watch'), {
                rotate: 0,
                duration: .3
            }, 'rotate')


        if (matchMediaArr[1250].min) {
            tl.from($($watch2).find('.money img'), {
                opacity: 0,
                scale: 0,
                duration: 0.2,
                stagger: .1
            })
        }
    }


    //ORDER
    const $order1 = $('#order-1')
    if ($order1.length) {
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: $order1[0],
                start: 'top 50%'
            }
        });

        tl.from($($order1), {
                opacity: 0,
                y: 80,
                duration: .4
            })
            .from($($order1).find('.js-btns'), {
                opacity: 0,
                x: -100,
                duration: .3,
                stagger: 0.25
            })
            .from($($order1).find('.js-phone'), {
                opacity: 0,
                x: 100,
                y: 100,
                rotate: -15,
                duration: .3,
                onComplete: complete
            })
            .from($($order1).find('.js-watch-1'), {
                opacity: 0,
                x: 100,
                duration: .3
            })
            .from($($order1).find('.js-watch-2'), {
                opacity: 0,
                x: -100,
                duration: .3
            }, '-=.15')

        function complete() {
            const $num1 = $($order1).find('.js-num-1')
            $($num1).css({
                opacity: 1
            })
            $($num1).animateNumber({
                number: $($num1).attr('data-value')
            }, {
                easing: 'swing',
                duration: 1500
            })

            const $num2 = $($order1).find('.js-num-2')
            $($num2).css({
                opacity: 1
            })
            $($num2).animateNumber({
                number: $($num2).attr('data-value')
            }, {
                easing: 'swing',
                duration: 1500
            })
        }
    }


    //MARKET
    const $market = $('#s-market')
    if ($market.length) {
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: $market[0],
                start: 'top 50%'
            }
        });

        tl.from($($market).find('.js-fade-right'), {
                opacity: 0,
                xPercent: -100,
                duration: .3,
                stagger: 0.2
            })
            .from($($market).find('.js-fade-up'), {
                opacity: 0,
                yPercent: 100,
                duration: .2,
                stagger: 0.1
            })
            .from($($market).find('.js-fade-up-2'), {
                opacity: 0,
                yPercent: 100,
                duration: .5
            })
    }


    //MARKET 2
    const $market2 = $('#s-market-2')
    if ($market2.length) {
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: $market2[0],
                start: 'top 50%'
            }
        });

        tl.from($($market2).find('.js-fade-right'), {
                opacity: 0,
                xPercent: -100,
                duration: .3,
                stagger: 0.2
            })
            .from($($market2).find('.js-fade-up'), {
                opacity: 0,
                yPercent: 100,
                duration: .2
            })
            .from($($market2).find('.js-fade-left'), {
                opacity: 0,
                xPercent: 100,
                duration: .3,
                stagger: 0.2
            })
    }


    //PARTNERS
    // const $partners = $('#partners')
    // if($partners.length){
    //   const wrap = $($partners).find('.partners__wrap')
    //   let tl = gsap.timeline({
    //     scrollTrigger: {
    //       trigger: $partners[0],
    //       start: "bottom 90%", // when the top of the trigger hits the top of the viewport
    //       scrub: 2, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
    //     }
    //   });
    //   tl.to(wrap, {xPercent: -100})

    //   let tl2 = gsap.timeline({ scrollTrigger: { trigger: '#s-partners', start: 'top 80%' } });
    //   tl2.from( $('#s-partners .js-fade-right'), {opacity: 0, xPercent: -100, duration: .3})
    // }


    //ROADMAP
    const $roadmap = $('#s-roadmap')
    if ($roadmap.length) {
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: $roadmap[0],
                start: 'top 80%'
            }
        });
        tl.from($($roadmap).find('.js-fade-right'), {
            opacity: 0,
            xPercent: -100,
            duration: .3
        })
        tl.from($($roadmap).find('.js-fade-up'), {
            opacity: 0,
            yPercent: 100,
            duration: .3,
            stagger: .2
        })
    }


    //FEATURES
    const $features = $('#s-features')
    if ($features.length) {
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: $features[0],
                start: 'top 80%'
            }
        });
        tl.from($($features).find('.js-fade-right'), {
            opacity: 0,
            xPercent: -100,
            duration: .3
        })
    }


    //COMMUNITY
    const $community = $('#s-community')
    if ($community.length) {
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: $community[0],
                start: 'top 80%'
            }
        });
        tl.from($($community).find('.js-fade-right'), {
                opacity: 0,
                xPercent: -100,
                duration: .3
            })
            .from($($community).find('.js-fade-right-2'), {
                opacity: 0,
                xPercent: -100,
                duration: .3,
                stagger: .2
            })
            .from($($community).find('.js-fade-left'), {
                opacity: 0,
                xPercent: 100,
                duration: .5
            }, '-=.2')
    }


    //FOOTER
    const $footer = $('#s-footer')
    if ($footer.length) {
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: $footer[0],
                start: 'top 80%'
            }
        });
        tl.from($($footer).find('.js-fade-up'), {
            opacity: 0,
            yPercent: 100,
            duration: .2,
            stagger: .1
        })
        tl.from($($footer).find('.js-fade-right'), {
            opacity: 0,
            xPercent: -100,
            duration: .2,
            stagger: .1
        })
        tl.from($($footer).find('.js-fade-left'), {
            opacity: 0,
            xPercent: 100,
            duration: .2,
            stagger: .1
        })
    }


    //ACTIVITY
    const $activity = $('#s-activity')
    if ($activity.length) {
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: $activity[0],
                start: 'top 80%'
            }
        });
        tl.from($($activity).find('.js-fade-left'), {
            opacity: 0,
            xPercent: 100,
            duration: .2,
            stagger: .1
        })
        tl.from($($activity).find('.js-fade-right'), {
            opacity: 0,
            xPercent: -100,
            duration: .2,
            stagger: .1
        })
        tl.from($($activity).find('.js-fade-left-2'), {
            opacity: 0,
            xPercent: 100,
            duration: .2
        })
    }


    //INFO
    const $info = $('#s-info')
    if ($info.length) {
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: $info[0],
                start: 'top 40%'
            }
        });
        tl.from($($info).find('.js-fade-right'), {
            opacity: 0,
            xPercent: -100,
            duration: .2,
            stagger: .1,
            onComplete: complete
        })

        if (matchMediaArr[1250].max) {
            tl.from($($info).find('.top__info-pic'), {
                opacity: 0
            })
        }

        function complete() {
            const $nums = $($info).find('.js-stats-num')
            const comma_separator_number_step = $.animateNumber.numberStepFactories.separator(' ')

            $.each($nums, function (i, num) {
                $(num).css({
                    opacity: 1
                })
                $(num).animateNumber({
                    number: $(num).attr('data-num'),
                    numberStep: comma_separator_number_step
                }, {
                    easing: 'swing',
                    duration: 1500
                })
            })
        }
    }


    //TYPES
    const $types = $('#s-types')
    if ($types.length) {
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: $types[0],
                start: 'top 80%'
            }
        });
        tl.from($($types).find('.js-fade-right'), {
                opacity: 0,
                xPercent: -100,
                duration: .3,
                stagger: .15
            })
            .from($($types).find('.js-fade-up'), {
                opacity: 0,
                yPercent: 100,
                duration: .3,
                stagger: .15
            })
            .from($($types).find('.js-fade'), {
                opacity: 0,
                duration: .3,
                stagger: .15
            })
    }


    //LEVELS
    const $levels = $('#s-levels')
    if ($levels.length) {
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: $levels[0],
                start: 'top 80%'
            }
        });
        tl.from($($levels).find('.js-fade-right'), {
                opacity: 0,
                xPercent: -100,
                duration: .3,
                stagger: .15
            })
            .from($($levels).find('.js-fade-left'), {
                opacity: 0,
                xPercent: 100,
                duration: .3,
                stagger: .15
            })
            .from($($levels).find('.js-fade-up'), {
                opacity: 0,
                y: 100,
                duration: .3,
                stagger: .15
            })
    }


    //REWARDS
    const $rewards = $('#s-rewards')
    if ($rewards.length) {
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: $rewards[0],
                start: 'top 50%'
            }
        });
        tl.from($($rewards).find('.js-fade-left'), {
                opacity: 0,
                xPercent: 100,
                duration: .3,
                stagger: .15
            })
            .from($($rewards).find('.js-fade-up'), {
                opacity: 0,
                y: 100,
                duration: .3,
                stagger: .15
            })
            .from($($rewards).find('.js-fade-right'), {
                opacity: 0,
                xPercent: -100,
                duration: .3,
                stagger: .15
            })

        if (matchMediaArr[1250].min) {
            moveToMouse($rewards)
        }
    }


    //WORKS
    const $works = $('#s-works')
    if ($works.length) {
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: $works[0],
                start: 'top 50%'
            }
        });
        tl.from($($works).find('.js-fade-right'), {
                opacity: 0,
                xPercent: -100,
                duration: .3,
                stagger: .15
            })
            .from($($works).find('.js-fade-up'), {
                opacity: 0,
                y: 100,
                duration: .3,
                stagger: .15,
                onComplete: function () {
                    new ActiveApp($($works).find('.js-app'), [9, 11])
                }
            })
            .from($($works).find('.js-fade'), {
                opacity: 0,
                duration: .3,
                stagger: .15
            })


        $($works).find('.js-app').addClass('active')
        if (matchMediaArr[1250].min) {
            moveToMouse($works)
        }
    }


    //SHARE
    // const $share = $('#s-share')
    // if($share.length){
    //   let tl = gsap.timeline({ scrollTrigger: { trigger: $share[0], start: 'top 50%' } });
    //   tl.from( $($share).find('.js-fade-left'), {opacity: 0, xPercent: 100, duration: .3})
    //     .from( $($share).find('.js-fade-up'), {opacity: 0, y: 100, duration: .3, stagger: .15})
    //     tl.from( $($share).find('.js-fade-left-2'), {opacity: 0, xPercent: 100, duration: .3, stagger: .15})


    // }


    //SWAP
    const $swap = $('#s-swap')
    if ($swap.length) {
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: $swap[0],
                start: 'top 50%'
            }
        });
        tl.from($($swap).find('.js-fade-right'), {
                opacity: 0,
                xPercent: -100,
                duration: .3,
                stagger: .15
            })
            .from($($swap).find('.js-fade-up-1'), {
                opacity: 0,
                yPercent: 100,
                duration: .5
            })
            .from($($swap).find('.js-fade-up-2'), {
                opacity: 0,
                yPercent: 100,
                rotate: 1.8,
                duration: .5
            }, '-=.2')
            .to($($swap).find('.js-fade-up-2'), {
                rotate: 30,
                duration: .3
            })
    }


    //ORDER
    const $order2 = $('#order-2')
    if ($order2.length) {
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: $order2[0],
                start: 'top 50%'
            }
        });

        tl.from($($order2), {
                opacity: 0,
                y: 80,
                duration: .4
            })
            .from($($order2).find('.js-btns'), {
                opacity: 0,
                x: -100,
                duration: .3,
                stagger: 0.25
            })
            .from($($order2).find('.js-phone'), {
                opacity: 0,
                x: 100,
                y: 100,
                rotate: -15,
                duration: .3,
                onComplete: complete
            })

        function complete() {
            $($order2).find('.js-app').addClass('active')
            new ActiveApp($($order2).find('.js-app'), [3, 5])
        }
    }


    //TOKEN
    const $token = $('#s-token')
    if ($token.length) {
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: $token[0],
                start: 'top 50%'
            }
        });

        tl.from($($token).find('.js-fade-left'), {
                opacity: 0,
                x: 100,
                duration: .3,
                stagger: 0.2
            })
            .from($($token).find('.js-fade'), {
                opacity: 0,
                xPercent: -20,
                duration: .3,
                stagger: 0.2
            }, '-=0.3')

    }


    //REMARKS
    const $remarks = $('#s-remarks')
    if ($remarks.length) {
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: $remarks[0],
                start: 'top 50%'
            }
        });

        tl.from($($remarks).find('.js-fade-right'), {
                opacity: 0,
                x: 100,
                duration: .3,
                stagger: 0.2
            })
            .from($($remarks).find('.js-fade-up'), {
                opacity: 0,
                yPercent: 20,
                duration: .3,
                stagger: 0.2
            })

    }


    //TOKENOMICS
    const $tokenomics = $('#s-tokenomics')
    if ($tokenomics.length) {
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: $tokenomics[0],
                start: 'top 50%'
            }
        });

        tl.from($($tokenomics).find('.js-fade-left'), {
                opacity: 0,
                xPercent: -100,
                duration: .3
            })
            .from($($tokenomics).find('.js-fade-right'), {
                opacity: 0,
                xPercent: 100,
                duration: .3
            })
            .from($($tokenomics).find('.js-fade-up'), {
                opacity: 0,
                yPercent: 20,
                duration: .3
            })

    }


    //VIDEO
    const $video = $('#s-video')
    if ($video.length) {
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: $video[0],
                start: 'top 50%'
            }
        });

        tl.from($($video).find('.js-fade-left'), {
                opacity: 0,
                xPercent: -100,
                duration: .3
            })
            .from($($video).find('.js-fade-up'), {
                opacity: 0,
                yPercent: 20,
                duration: .3,
                stagger: 0.2
            })
            .from($($video).find('.js-fade'), {
                opacity: 0,
                duration: .3,
                stagger: 0.1
            })

        if (matchMediaArr[1250].min) {
            moveToMouse($video)
        }
    }


    function moveToMouse(wrap) {
        const moveMouse = $(wrap).find('.js-animate-move-mouse')

        $(wrap).on('mousemove', function (e) {
            let x = e.clientX / window.innerWidth;
            let y = e.clientY / window.innerHeight;
            $(moveMouse).css({
                transform: 'translate(-' + x * 6 + '%, -' + y * 6 + '%)'
            })
        })
    }

})