export type Card = {
	title: string;
	subtitle: string;
	text: string;
	link: string;
	link2: string;
};

export type CardList = Card[];

export const onCardSelectedEvent = 'onCardSelectedEvent';
