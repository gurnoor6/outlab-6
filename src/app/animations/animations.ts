import {
  trigger,
  state,
  style,
  animate,
  transition,
  query,
  keyframes

} from '@angular/animations';

export const shrink = trigger('shrink',[
	state('big',style({
		width:"100%",
	})),

	state('small',style({
		width:"50%",
	})),

	transition('big<=>small',[
		query(':self',animate("0.1s")),
	])

]);


export const routeAnimations = trigger('routeAnimations',[
	transition('formPage=>contactPage',[
		style({
			transform:'translateX(-300px)',
			opacity:0
		}),
		animate("0.1s ease-in"),
	]),

	transition('contactPage=>formPage',[
		style({
			opacity:0
		}),
		animate("0.1s ease-in"),
	]),
]);