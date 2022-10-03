import * as React from "react"
import Layout from "../components/layout"

const articlesTemplate = ({ pageContext: { data } }) => {
  <Layout>
    <div>
      <div className="">
        <h1>{data.title}</h1>
        <p>{data.description}</p>
      </div>

      <div
        className=""
        dangerouslySetInnerHTML={{ __html: data.content.html }}
      ></div>
      {/* <div className="">
{data.tags.map((tag) =>{
  return(
    <span>{tag}</span>
  )
})}
      </div> */}
    </div>
  </Layout>
}
export default articlesTemplate


