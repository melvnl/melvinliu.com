export type Nav = {
  href: string;
  text: string;
};

export type Blog = {
  title: string;
  slug: string;
  date: string;
  description: string;
  cover: string;
  blurUrl: string;
  content: string;
};

export type Project = {
  title: string;
  slug: string;
  date: string;
  type: string;
  description: string;
  link: string;
  cover: string;
  blurUrl: string;
  banner: string;
};

export type message = {
  status: number;
};
export type Snippet = {
  title: string;
  slug: string;
  description: string;
};

export enum Form {
  Initial,
  Loading,
  Success,
  Error,
}

export type FormState = {
  state: Form;
  message?: string;
};
