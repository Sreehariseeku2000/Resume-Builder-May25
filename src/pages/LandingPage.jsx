import React from 'react'
import { Link } from 'react-router-dom'

function LandingPage() {
  return (
    <>
      <section className='container-fluid first' style={{ width: "100%", overflowX: 'hidden', height: '450px', backgroundImage: "url('https://www.shutterstock.com/image-photo/group-colleagues-engaging-discussion-during-260nw-2461746317.jpg')", backgroundAttachment: 'fixed', backgroundPosition: 'top', backgroundSize: 'cover' }} >
        <div className="row pt-5">
          <div className="col-12 col-md-4"> </div>
          <div className="col-12 col-md-4  shadow border py-5 rounded mt-5 text-center" style={{ backgroundColor: "rgb(255,255,255,0.5" }}>
            <h3>Designed to get hired.</h3>
            <h4>Your skills, your story, your next job - all in one.</h4>
            <Link to={"/resume"}>
              <button className="btn" style={{ backgroundColor: "purple" }}>Make Your Resume</button></Link>
          </div>
          <div className="col-12 col-md-4"> </div>
        </div>
      </section>
      {/* tools */}
      <section className="tools p-5">
        <h1 className='text-center'>Tools</h1>
        <div className='row align-items-center'>
          <div className="tool-content col-12 col-md-6 p-5">
            <h4>Resume</h4>
            <p>Create unlimited new resumes and easily edit them afterwards</p>
            <h4>Cover Letters</h4>
            <p>Easily write professional cover letters</p>
            <h4>Jobs</h4>
            <p>Automatically receive new and relavant job postings</p>
            <h4>Application</h4>
            <p>Effortlessly manage and track your job applications in an organised manner</p>
          </div>
          <div className="tool-image col-12 col-md-6">
            <img className='w-75 ms-5' src="https://s3.eu-west-2.amazonaws.com/resumedone-eu-west-2-staging/-n8pldVDJD-photo.png" alt="tools" />

          </div>

        </div>
      </section>
      {/* background */}

      <section className=' first' style={{ width: "100%", overflowX: 'hidden', height: '450px', backgroundImage: "url('https://www.quillsuk.co.uk/wp-content/uploads/2019/09/happy-employees-1-1030x639.jpg')", backgroundAttachment: 'fixed', backgroundPosition: 'top', backgroundSize: 'cover' }} >
      </section>
      {/* Testimony */}
       <section className="tools p-5">
        <h1 className='text-center my-3'>Testimonial</h1>
        <div className='row align-items-center p-5'>
          <div className="tool-content col-12 col-md-6 p-5">
            <h3 className='mb-5'>Trusted by professionals worldwidw</h3>
            <p>At Livecareer , we don't just help you create resumes - we help you land the job. Wheayher you're a seasoned professional or just starting out, our tools are designed to get results</p>
            <p>In fact , users who used Livecarer reported getting hired an average of 48 days faster</p>
            <p>Join thousands of job-seekers who've fast-tracked their careers with a resume that truly stands out</p>
          </div>
          <div className="tool-image col-12 col-md-6">
            <div className="row my-3">
              <div  className="col-3">
                <img className='w-100' src="https://plus.unsplash.com/premium_photo-1689539137236-b68e436248de?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D" alt="" />
              </div>
              <div  className="col-3">
                <img className='w-100' src="https://media.istockphoto.com/id/1319763650/photo/carefree-mid-adult-woman-laughing.jpg?s=170667a&w=0&k=20&c=3W5ktdro2pNkCFNfQpY4nybuiyayKVKle9XasMeJJQw=" alt="" />
              </div>
              <div  className="col-3">
                <img className='w-100' src="https://plus.unsplash.com/premium_photo-1688740375397-34605b6abe48?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZSUyMHBpY3xlbnwwfHwwfHx8MA%3D%3D" alt="" />
              </div>
              <div  className="col-3">
                <img className='w-100' src="https://media.istockphoto.com/id/1320811419/photo/head-shot-portrait-of-confident-successful-smiling-indian-businesswoman.jpg?s=612x612&w=0&k=20&c=bCUTB8vd8MnzZFIq-x645-SmLNk2sQzOvOvWCPGDfZ4=" alt="" />
              </div>
            </div>
            <div className="row my-3">
              <div  className="col-3">
                <img className='w-100' src="https://media.istockphoto.com/id/1171169127/photo/headshot-of-cheerful-handsome-man-with-trendy-haircut-and-eyeglasses-isolated-on-gray.jpg?s=612x612&w=0&k=20&c=yqAKmCqnpP_T8M8I5VTKxecri1xutkXH7zfybnwVWPQ=" alt="" />
              </div>
              <div  className="col-3">
                <img className='w-100' src="https://img.freepik.com/photos-premium/closeup-portrait-jeune-homme-souriant-positif-satisfait-posant-isole-mur-gris-clair-portant-chemise-decontractee-beige-chapeau-noir-lunettes-mode-concept-jeunesse-emotions_176532-6770.jpg" alt="" />
              </div>
              <div  className="col-3">
                <img className='w-100' src="https://img.freepik.com/free-photo/man-wearing-t-shirt-gesturing_23-2149393638.jpg?semt=ais_hybrid&w=740&q=80" alt="" />
              </div>
              <div  className="col-3">
                <img className='w-100' src="https://img.freepik.com/free-photo/positive-male-youngster-with-curly-hair_176532-8174.jpg?semt=ais_hybrid&w=740&q=80" alt="" />
              </div>
            </div>
            <div className="row my-3">
              <div  className="col-3">
                <img className='w-100' src="https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D" alt="" />
              </div>
              <div  className="col-3">
                <img className='w-100' src="https://plus.unsplash.com/premium_photo-1689977807477-a579eda91fa2?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D" alt="" />
              </div>
              <div  className="col-3">
                <img className='w-100' src="https://media.istockphoto.com/id/1386479313/photo/happy-millennial-afro-american-business-woman-posing-isolated-on-white.jpg?s=612x612&w=0&k=20&c=8ssXDNTp1XAPan8Bg6mJRwG7EXHshFO5o0v9SIj96nY=" alt="" />
              </div>
              <div  className="col-3">
                <img className='w-100' src="https://t4.ftcdn.net/jpg/02/19/63/31/360_F_219633151_BW6TD8D1EA9OqZu4JgdmeJGg4JBaiAHj.jpg" alt="" />
              </div>
            </div>

          </div>

        </div>
      </section>
    </>
  )
}

export default LandingPage