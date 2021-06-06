

export interface jmjFolder {
  title: string;
  bkmrks: jmjBookmark[]
}

export interface jmjBookmark {
  title?: string;
  url?: string;
  urls?: string[];
  type?: string;
  note?: string;
}
