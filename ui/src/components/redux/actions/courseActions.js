import * as courseApi from "../";

export function createCourse(course) {
  return { type: "CREATE_COURSE", course: course };
}

export const getArticles = () => {
  console.warn("im here");
  return {
    type: "GET_ARTICLES",
  }
};