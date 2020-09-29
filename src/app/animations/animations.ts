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
		width:"80%",
		// transform:"translateX(0%)"
	})),

	state('small',style({
		width:"40%",
		// transform:"translateX(-50%)"
	})),

	transition('big<=>small',[
		query(':self',animate("0.1s")),
	])

])