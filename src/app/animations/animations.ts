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
			transform:'translateX(-500px)'
		}),
		animate("0.1s"),
	])
]);