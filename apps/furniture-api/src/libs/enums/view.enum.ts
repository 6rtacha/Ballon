import { registerEnumType } from '@nestjs/graphql';

export enum ViewGroup {
	MEMBER = 'MEMBER',
	ARTICLE = 'ARTICLE',
	PRODUCT = 'PRODUCT',
	PROJECT = 'PROJECT',
}
registerEnumType(ViewGroup, {
	name: 'ViewGroup',
});
