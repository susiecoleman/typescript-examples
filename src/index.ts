// Basic Types

const text: string = "This is some text";
const num: number = 12;
const isTrue: boolean = false;

const array: number[] = [1, 2, 3];
const tuple: [number, string] = [1, "one"];

// Functions

const adder = (a: number, b: number): number => a + b;

// Interfaces

interface Article {
  headline: string;
  standfirst: string;
  body: string;
  numberOfViews?: number;
}

interface StreamPost {
  streamId: string;
  headline: string;
  standfirst: string;
  body: string;
  publishingSystem: string;
}

const convertStreamPostToArticle = (post: StreamPost): Article => ({
  headline: post.streamId,
  standfirst: post.standfirst,
  body: post.body,
  numberOfViews: 0,
});

// Literal Types

type PublishingSystem = "Desktop" | "Mobile";

const printPublishingSystem = (system: PublishingSystem): void =>
  console.log(system);

// Union Types

type ArticleOrStream = Article | StreamPost;

const getBody = (content: ArticleOrStream): string => content.body;

getBody({ headline: "s", standfirst: "s", body: "b", numberOfViews: 1 });
