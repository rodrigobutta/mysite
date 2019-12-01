import React from 'react'
import Navbar from '../../common/navbar/navbar'
import Footer from '../../common/footer/footer'

const BlogPost = () => {
  return (
    <React.Fragment>
      <Navbar light/>

      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-10">
            <h1 className="mt-8 mb-7">Better Research, Better Design, Better Results</h1>
          </div>
        </div>
        <img src="/assets/img/blog/blogpost.jpg" alt="" className="img-fluid mb-5"/>

        <div className="row justify-content-center">
          <div className="col-xl-10">
            <p className="mb-5">Web design encompasses many different skills and disciplines in the production and
              maintenance of websites. The different areas of web design include web graphic design; interface design;
              authoring, including standardised code and proprietary software; user experience design; and search
              engine optimization. Often many individuals will work in teams covering different aspects of the design
              process, although some designers will cover them all. The term web design is normally used to describe
              the design process relating to the front-end (client side) design of a website including writing markup.
              Web design partially overlaps web engineering in the broader scope of web development. Web designers are
              expected to have an awareness of usability and if their role involves creating markup then they are also
              expected to be up to date with web accessibility guidelines.</p>

            <h3>The start of the web and web design</h3>
            <p>In 1989, whilst working at CERN Tim Berners-Lee proposed to create a global hypertext project, which
              later became known as the World Wide Web. During 1991 to 1993 the World Wide Web was born. Text-only
              pages could be viewed using a simple line-mode browser. In 1993 Marc Andreessen and Eric Bina, created
              the Mosaic browser. At the time there were multiple browsers, however the majority of them were
              Unix-based and naturally text heavy. There had been no integrated approach to graphic design elements
              such as images or sounds. The Mosaic browser broke this mould. The W3C was created in October 1994 to
              "lead the World Wide Web to its full potential by developing common protocols that promote its evolution
              and ensure its interoperability." This discouraged any one company from monopolizing a propriety browser
              and programming language, which could have altered the effect of the World Wide Web as a whole. The W3C
              continues to set standards, which can today be seen with JavaScript. In 1994 Andreessen formed
              Communications Corp. that later became known as Netscape Communications, the Netscape 0.9 browser.
              Netscape created its own HTML tags without regard to the traditional standards process. For example,
              Netscape 1.1 included tags for changing background colours and formatting text with tables on web pages.
              Throughout 1996 to 1999 the browser wars began, as Microsoft and Netscape fought for ultimate browser
              dominance. During this time there were many new technologies in the field, notably Cascading Style
              Sheets, JavaScript, and Dynamic HTML. On the whole, the browser competition did lead to many positive
              creations and helped web design evolve at a rapid pace.</p>
          </div>
        </div>
      </div>

      <Footer light/>
    </React.Fragment>
  )
}

export default BlogPost