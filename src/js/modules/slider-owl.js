import $ from 'jquery'
import 'owl.carousel'

function slider() {
  const owl = $('.owl-carousel')
  owl.owlCarousel({
    pagination: true,
		center: true,
		loop: true,
		margin: 30,
		items: 3,
    responsive : {
      320 : {
        items: 1,
        center: false
      },
      425 : {
        items: 2,
        margin: 20,
        center: false,
        pagination: true
      },
      640 : {
        items: 2,
        margin: 20,
        center: false
      },
      740 : {
        items: 3,
        margin: 20,
      },
      1023 : {
          items: 3,
          margin: 20,
      },
      1200 : {
          margin: 30,
      }
    }
	})
  $('.customNextBtn').click(function () {
    owl.trigger('next.owl.carousel')
  })
  $('.slider__btn--prev').click(function () {
    owl.trigger('prev.owl.carousel')
  })
  $('.slider__btn--next').click(function () {
    owl.trigger('next.owl.carousel')
  })
}

export default slider
