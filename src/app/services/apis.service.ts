export const API =  {
    repoinfo : ( Date:string, Page:number) =>  `https://api.github.com/search/repositories?q=created:>${Date}&sort=stars&order=desc&page=${Page}`
}