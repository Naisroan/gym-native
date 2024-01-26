import { BaseType } from "./base";

export interface PracticeType extends BaseType {
	name: string
	imageSrc?: string
	duration?: number
	break?: number
	repetitions?: number
}