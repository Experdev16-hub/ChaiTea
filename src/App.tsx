import { FaArrowRight, FaBiohazard, FaBlender, FaCanadianMapleLeaf, FaCheck, FaCopyright, FaEnvira, FaFacebook, FaIndustry, FaInstagram, FaMailBulk, FaPagelines, FaPhone, FaStar, FaUserFriends } from "react-icons/fa"
import { FaCircleCheck, FaLeaf, FaMessage } from "react-icons/fa6"
import { TbFlagCancel } from "react-icons/tb"

const App = () => {
  return (
    <div >
      <section className={`px-40 pt-5 pb-16 bg-green-300 bg-cover bg-center bg-[url('/images/hero_section1.jpg')]`}>
        <div></div>
        <header className={`flex  px-2 py-1 justify-between items-center bg-white rounded-4xl`}>
          <h3 className={`text-xl font-bold text-green-600`}>CHAITEA</h3>
          <p className={`text-green-700`}>Limited time offer, Get 15% Off on your first order- Use code CHAITEA</p>
          <button className={`py-1 px-7 bg-green-700 rounded-2xl text-white`}>Buy Now</button>
        </header>
        <div className={`flex justify-between items-center pt-16 gap-20`}>
          <div className={`flex-1/2`}>
            <h1 className={`font-bold text-green-900 text-5xl `}>Savour India's Rich Chai Heritage in Every Sip</h1>
            <p className={`pt-5`}>
              Explore 10 premium blends handpicked from india's finest tea gardens
              plus enjoy a free valencia class teecup & ideal teaspoon
            </p>
            <button className={`py-1 px-7 mt-5 bg-green-700 rounded-2xl text-white`}>Order Your Sampler Today</button>
          </div>
          <div className={`h-96 flex-1/2`}>
              <img src="/images/c2.png" className={`w-full h-full`} alt="" />
          </div>
        </div>
      </section>
      <section className={`flex items-center justify-evenly text-white bg-green-600 px-40 py-4`}>
        <h5 className={`font-bold text-xl border-r-1 border-green-200 px-4`}>Clients who inspire us</h5>
        
      </section>
      <section className={`px-40 py-16`}>
        <div className={`flex justify-between items-center gap-8`}>
          <div className={`flex gap-3 flex-1/2 h-96`}>
            <div className={`flex flex-col gap-3 flex-1/2`}>
              <div className={`bg-center bg-cover bg-[url('/images/card2.jpg')] w-full h-full rounded-l-[150px] rounded-r-3xl flex-2/5`}></div>
              <div className={`bg-center bg-cover bg-[url('/images/card3.jpg')] w-full h-full rounded-b-[150px] rounded-t-3xl flex-3/5`}></div>
            </div>
            <div className={`flex-1/2`}>
              <div className={`bg-center bg-cover bg-[url('/images/card1.jpg')] w-full h-full rounded-r-[100px] rounded-l-3xl`}></div>
            </div>
          </div>
          <div className={`flex-1/2`}>
            <h3 className={`text-green-800 font-bold text-4xl`}>Why You'll Love This Chai Sampler</h3>
            <p>
              Indulge in the authentic flavors of india with our specislly curated chai sampler. Each blend is
              created to give you a distinct and flavourful experience ensuring that every cup is a journey 
              through india's rich tea heritage
            </p>
            <div className={`flex justify-between items-center`}>
              <div>
                <div className={`flex items-center gap-2 text-green-900`}>
                  <FaCircleCheck size={20} />
                  <p className={`font-bold`}>Taste 10 Unique Blends</p>
                </div>
                <div className={`flex items-center gap-2 text-green-900`}>
                  <FaCircleCheck size={20} />
                  <p className={`font-bold`}>100% Natural Ingredients</p>
                </div>
                <div className={`flex items-center gap-2 text-green-900`}>
                  <FaCircleCheck size={20} />
                  <p className={`font-bold`}>Exclusive Free Gifts</p>
                </div>
                <div className={`flex items-center gap-2 text-green-900`}>
                  <FaCircleCheck size={20} />
                  <p className={`font-bold`}>Farm Fresh & Ethically Sourced</p>
                </div>
                <div>
                  <button className={`py-1 px-9 mt-5 bg-green-700 rounded-2xl text-white`}>Order Now</button>
                </div>
              </div>
              <div className={`bg-lime-200 border-t-2 border-green-950 rounded-b-full px-7 pt-7 pb-16 text-center`}>
                <h4 className={`font-bold text-3xl text-green-800`}>30+</h4>
                <p className={`font-bold text-xl text-green-800`}> Years of <br/> Experience</p>
              </div>
            </div>
          </div>
        </div>
        <div className={`flex justify-between items-center text-green-900 pt-10`}>
          <div className={`flex items-center gap-2`}>
            <div>
              <FaLeaf size={30}/>
            </div>
            <div>
              <h6 className={`font-bold text-sm`}>Perfect For Gifting</h6>
              <p className={`text-sm`}>Thoughtfully Packaged Set.</p>
            </div>
          </div>
          <div className={`flex items-center gap-2`}>
            <div>
              <FaCanadianMapleLeaf size={30}/>
            </div>
            <div>
              <h6 className={`font-bold text-sm`}>Curated By Tea Experts</h6>
              <p className={`text-sm`}>Blended For authenticity.</p>
            </div>
          </div>
          <div className={`flex items-center gap-2`}>
            <div>
              <FaPagelines size={30}/>
            </div>
            <div>
              <h6 className={`font-bold text-sm`}>Supports Local Farmers</h6>
              <p className={`text-sm`}>Help Sustain Small Growers.</p>
            </div>
          </div>
          <div className={`flex items-center gap-2`}>
            <div>
              <FaEnvira size={30}/>
            </div>
            <div>
              <h6 className={`font-bold text-sm`}>Loved By Thousands</h6>
              <p className={`text-sm`}>A Favourite among chai lovers.</p>
            </div>
          </div>
        </div>
      </section>
      <section className={`relative px-40 py-16 text-center bg-cover bg-center bg-[url('/images/section_image.jpg')]`}>
        <div className={`absolute inset-0 bg-green-900/80`}></div>
        <div className={`relative z-10`}>
          <div className={`text-white`}>
            <h1 className={`text-4xl font-bold`}>Discover The Flavors Of India</h1>
            <p>Embark on a sensory journey with our hand selected chai blends, each <br /> crafted to deliver
              an authentic taste of India
            </p>
          </div>
          <div className={`flex justify-evenly items-center gap-5 pt-10`}>
            <div className={`bg-white p-5 rounded-xl`}>
              <h5 className={`font-bold text-xl text-green-700`}>Assom Chai</h5>
              <p>
                Sourced from Assam's chai finest tea estates, this robust chai is known for it's
                full-bodied flavor, rich aroma, deep amber color.
              </p>
              <button className={`py-1 px-5 mt-5 bg-green-700 rounded-2xl text-white`}>Malty and Bold</button>
            </div>
            <div className={`bg-white p-5 rounded-xl`}>
              <h5 className={`font-bold text-xl text-green-700`}>Assom Chai</h5>
              <p>
                Sourced from Assam's chai finest tea estates, this robust chai is known for it's
                full-bodied flavor, rich aroma, deep amber color.
              </p>
              <button className={`py-1 px-9 mt-5 bg-green-700 rounded-2xl text-white`}>Malty and Bold</button>
            </div>
            <div className={`bg-white p-5 rounded-xl`}>
              <h5 className={`font-bold text-xl text-green-700`}>Assom Chai</h5>
              <p>
                Sourced from Assam's chai finest tea estates, this robust chai is known for it's
                full-bodied flavor, rich aroma, deep amber color.
              </p>
              <button className={`py-1 px-9 mt-5 bg-green-700 rounded-2xl text-white`}>Malty and Bold</button>
            </div>
            <div className={`bg-white p-5 rounded-xl`}>
              <h5 className={`font-bold text-xl text-green-700`}>Assom Chai</h5>
              <p>
                Sourced from Assam's chai finest tea estates, this robust chai is known for it's
                full-bodied flavor, rich aroma, deep amber color.
              </p>
              <button className={`py-1 px-9 mt-5 bg-green-700 rounded-2xl text-white`}>Malty and Bold</button>
            </div>
          </div>
        </div>
      </section>
      <section className={`px-40 py-20 bg-amber-100`}>
        <div>
          <div className={`flex items-center gap-10`}>
            <h3 className={`flex-3/12 text-3xl font-bold`}>
              How to Brew the <br /> perfect Cup
            </h3>
            <p className={`border-l pl-7 border-black flex-9/12`}>
              Brewing the perfect cup of chai is an art that blends tradition and technique. Whether you
              prefer it strong and bold or light and aromatic, follow these simple steps to craft the perfect
              cup and immerse yourself in an authentic and flavourful experience
            </p>
          </div>
        </div>
        <div className={`pt-20 flex gap-5`}>
          <div className={`flex gap-5 flex-1/5`}>
            <div className={`flex flex-col items-center text-center`}>
              <div className={`w-6 h-6 flex items-center justify-center bg-green-800 rounded-full`}>
                <FaBlender size={10} color={`white`}/>
              </div>
              <h2 className={`text-md font-medium`}>Boil Water</h2>
              <p>Heat water to 100 <br /> degrees for the best <br /> infusion</p>
            </div>
            <div className={`text-green-800`}>
              <FaArrowRight size={10}/>
            </div>
          </div>
          <div className={`flex gap-5 flex-1/5`}>
            <div className={`flex flex-col items-center text-center`}>
              <div className={`w-6 h-6 flex items-center justify-center bg-green-800 rounded-full`}>
                <FaBlender size={10} color={`white`}/>
              </div>
              <h2 className={`text-md font-medium`}>Boil Water</h2>
              <p>Heat water to 100 <br /> degrees for the best <br /> infusion</p>
            </div>
            <div className={`text-green-800`}>
              <FaArrowRight size={10}/>
            </div>
          </div>
          <div className={`flex gap-5 flex-1/5`}>
            <div className={`flex flex-col items-center text-center`}>
              <div className={`w-6 h-6 flex items-center justify-center bg-green-800 rounded-full`}>
                <FaBlender size={10} color={`white`}/>
              </div>
              <h2 className={`text-md font-medium`}>Boil Water</h2>
              <p>Heat water to 100 <br /> degrees for the best <br /> infusion</p>
            </div>
            <div className={`text-green-800`}>
              <FaArrowRight size={10}/>
            </div>
          </div>
          <div className={`flex gap-5 flex-1/5`}>
            <div className={`flex flex-col items-center text-center`}>
              <div className={`w-6 h-6 flex items-center justify-center bg-green-800 rounded-full`}>
                <FaBlender size={10} color={`white`}/>
              </div>
              <h2 className={`text-md font-medium`}>Boil Water</h2>
              <p>Heat water to 100 <br /> degrees for the best <br /> infusion</p>
            </div>
            <div className={`text-green-800`}>
              <FaArrowRight size={10}/>
            </div>
          </div>
          <div className={`flex gap-5 flex-1/5`}>
            <div className={`flex flex-col items-center text-center`}>
              <div className={`w-6 h-6 flex items-center justify-center bg-green-800 rounded-full`}>
                <FaBlender size={10} color={`white`}/>
              </div>
              <h2 className={`text-md font-medium`}>Boil Water</h2>
              <p>Heat water to 100 <br /> degrees for the best <br /> infusion</p>
            </div>
          </div>
        </div>
      </section>
      <section className={`px-40 py-20 flex gap-10 items-center justify-center`}>
        <div className={`flex-1/2`}>
          <h1 className={`font-bold text-green-900 text-3xl `}>
            Exclusive Free Gift - Elevate your Tea Ritual
          </h1>
          <p className={`pt-5`}>
            Experience the joy of authentic chai with an exclusive gift set that enhances your 
            tea drinking experience
          </p>
          <button className={`py-1 px-7 mt-5 bg-green-700 rounded-2xl text-white`}>
            Claim your free gift with the chai sampler 
          </button>
        </div>
        <div className={` flex gap-5 flex-1/2`}>
          <div className={`flex items-center text-center flex-col px-7 py-12 shadow shadow-black/10 `}>
            <div className={`w-16 h-16 rounded-full border-green-800 border-2 mb-5`}>
              <img src="/images/teacup.jpg" alt="Valencia Teacup" className={`w-full h-full rounded-full`}/>
            </div>
            <h5 className={`font-bold mb-2`}>Valencia Glass TeaCup</h5>
            <p >Elegant and heat resistance for chai lovers</p>
          </div>
          <div className={`flex items-center text-center flex-col px-7 py-12 shadow shadow-black/10 `}>
            <div className={`w-16 h-16 rounded-full border-green-800 border-2 mb-5`}>
              <img src="/images/teaspoon.jpg" alt="Ideal Teaspoon" className={`w-full h-full rounded-full`}/>
            </div>
            <h5 className={`font-bold mb-2`}>Ideal Teaspoon</h5>
            <p>Precisely measured for the perfect break</p>
          </div>
        </div>
      </section>
      <section className={`px-40 py-20 text-center bg-green-100`}>
        <div>
          <h1 className={`text-4xl font-bold text-green-700`}>Hear from our happy customers</h1>
          <p>Embark on a sensory journey with our hand selected chai blends, each <br /> crafted to deliver
            an authentic taste of India
          </p>
        </div>
        <div className={`flex gap-5 pt-10 text-left`}>
          <div className={`bg-white p-5 rounded-xl flex-1/2 shadow shadow-black/10`}>
            <div className={`text-green-700 flex gap-1`}>
              <FaStar size={10} />
              <FaStar size={10} />
              <FaStar size={10} />
              <FaStar size={10} />
              <FaStar size={10} />
            </div>
            <div className={`flex items-center justify-center gap-5`}>
              <div className={`flex-3/5`}>
                <p className={`py-4`}>
                  A delightful journey through india's chai culture. The flavours are incredible and the
                  teacup is stunning. I'll definitely order again
                </p>
                <p className={`text-green-700 pt-4 border-t border-black mr-12`}>Riya, Mumbai</p>
                <p>Tea enthusiast</p>
              </div>
              <div className={`w-36 h-36 rounded-full border-green-800 border-2 mb-5 `}>
                <img src="/images/teacup.jpg" alt="Valencia Teacup" className={`w-full h-full rounded-full`}/>
              </div>
            </div>
          </div>
          <div className={`bg-white p-5 rounded-xl flex-1/2 shadow shadow-black/10`}>
            <div>
              <div className={`text-green-700 flex gap-1`}>
                <FaStar size={10} />
                <FaStar size={10} />
                <FaStar size={10} />
                <FaStar size={10} />
                <FaStar size={10} />
              </div>
              <div className={`flex items-center justify-center gap-5`}>
                <div className={`flex-3/5`}>
                  <p className={`py-4`}>
                    Perfect for gifting, the packaging is gorgeous and every chai has a unique taste. My 
                    family loved every blend. I'll definitely order again
                  </p>
                  <p className={`text-green-700 pt-4 border-t border-black mr-12`}>Arjun, Delhi</p>
                  <p>Food Blogger</p>
                </div>
                <div className={`w-36 h-36 rounded-full border-green-800 border-2 mb-5 `}>
                  <img src="/images/teacup.jpg" alt="Valencia Teacup" className={`w-full h-full rounded-full`}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={`px-40 py-12 text-center`}>
        <div>
          <h1 className={`text-4xl font-bold text-green-700`}>Quality you can trust</h1>
          <p className={`pt-2`}>
            We are dedicated delivering an authentic and premium chai experience with every sip. Our blends
            are <br /> crafted to ensure quality and a unique taste of india's rich tea heritage
          </p>
        </div>
        <div className={`flex gap-5 pt-7`}>
          <div className={`flex items-center flex-1/6 flex-col`}>
            <div className={`flex items-center justify-center w-12 h-12 bg-green-800 rounded-full`}>
              <FaIndustry size={17} color={`white`} />
            </div>
            <h6 className={`font-semibold text-md pt-1`}>Made in India</h6>
          </div>
          <div className={`flex items-center flex-1/6 flex-col`}>
            <div className={`flex items-center justify-center w-12 h-12 bg-green-800 rounded-full`}>
              <TbFlagCancel size={17} color={`white`} />
            </div>
            <h6 className={`font-semibold text-md pt-1`}>Gluten Free</h6>
          </div>
          <div className={`flex items-center flex-1/6 flex-col`}>
            <div className={`flex items-center justify-center w-12 h-12 bg-green-800 rounded-full`}>
              <FaLeaf size={17} color={`white`} />
            </div>
            <h6 className={`font-semibold text-md pt-1`}>Vegan</h6>
          </div>
          <div className={`flex items-center flex-1/6 flex-col`}>
            <div className={`flex items-center justify-center w-12 h-12 bg-green-800 rounded-full`}>
              <FaCanadianMapleLeaf size={17} color={`white`} />
            </div>
            <h6 className={`font-semibold text-md pt-1`}>Paleo Friendly</h6>
          </div>
          <div className={`flex items-center flex-1/6 flex-col`}>
            <div className={`flex items-center justify-center w-12 h-12 bg-green-800 rounded-full`}>
              <FaUserFriends size={17} color={`white`} />
            </div>
            <h6 className={`font-semibold text-md pt-1`}>KetoFriendly</h6>
          </div>
          <div className={`flex items-center flex-1/6 flex-col`}>
            <div className={`flex items-center justify-center w-12 h-12 bg-green-800 rounded-full`}>
              <FaBiohazard size={17} color={`white`} />
            </div>
            <h6 className={`font-semibold text-md pt-1`}>GMO Free</h6>
          </div>
        </div>
      </section>
      <section className={`px-40 py-12 text-center`}>
        <div>
          <h1 className={`text-4xl font-bold text-green-700`}>Frequently asked questions</h1>
          <p className={`pt-2`}>
            Got questions? We've got answers! Here are some of the most common questions about our <br /> authentic
            india chai sampler
          </p>
        </div>
        <div className={`pt-10 text-left`}>
          <dl>
            <dt className={`bg-green-800 px-7 py-1 font-semibold text-white`}>1.What makes this chai sampler special?</dt>
            <dd className={`px-7 py-3`}>
              Each blend is handpicked from india's finest tea gardens, ensuring authenticity, freshness
              and a rich chai experience. We've also include a free valencia Teacup & ideal Teaspoon to 
              enhance your tea ritual
            </dd>
          </dl>
          <dl>
            <dt className={`bg-green-800 px-7 font-semibold py-1 text-white`}>2.How many varieties are included?</dt>
            <dd className={`px-7 py-3`}>
              You'll get 10 unique other blends, each offering a distinct flavour inspired by india's tea
              heritage from bold masala chai to aromatic saffron chai, this sampler bring the best of 
              india's chai to your cup
            </dd>
          </dl>
          <dl>
            <dt className={`bg-green-800 px-7 font-semibold py-1 text-white`}>3.Is this sampler suitable for all diet?</dt>
            <div className={`px-7 py-3`}>
              <dd>Absolutely our chai blends are:</dd>
              <div className={`flex items-center gap-1`}>
                <FaCheck size={13} />
                <dd>100% Natural & Non-Omo - No artificial additives</dd>
              </div>
              <div className={`flex items-center gap-1`}>
                <FaCheck size={13} />
                <dd>Vegan-Friendly & Gluten-Free - Enjoy without dietary concerns</dd>
              </div>
              <div className={`flex items-center gap-1`}>
                <FaCheck size={13} />
                <dd>Keto and Paleo Friendly - Free of any refined sugars</dd>
              </div>
            </div>
          </dl>
          <dl>
            <dt className={`bg-green-800 px-7 font-semibold py-1 text-white`}>4.Are there any allergens?</dt>
            <dd className={`px-7 py-3`}>
              Our blends are crafted to be free from common allergens ensuring a delightful and safe 
              experience for all chai lovers. However we  recommend checking the ingredients list if 
              you have specific.
            </dd>
          </dl>
        </div>
      </section>
      <footer className={`px-40 py-12 bg-green-800 text-white text-sm text-center`}>
        <div className={`pb-10 border-b flex gap-9 border-white/40 text-left`}>
          <div className={`flex-2/6`}>
            <h3 className={`text-4xl font-bold text-green-600 pb-4`}>CHAITEA</h3>
            <p>Bringing india's finest chai blend to the world - fresh authentic, and full of flavour.</p>
            <h6 className={`font-semibold pt-4`}>Connect with us</h6>
            <div className={`flex gap-2 pt-1`}>
              <div className={`flex items-center justify-center w-7 h-7 rounded-full border-2 border-white`}>
                <FaMessage size={13} color={`white`} />
              </div>
              <div className={`flex items-center justify-center w-7 h-7 rounded-full border-2 border-white`}>
                <FaFacebook size={13} color={`white`} />
              </div>
            </div>
          </div>
          <div className={`flex-1/6`}>
            <h6 className={`text-green-600 pb-3 font-semibold text-lg`}>OUR SERVICES</h6>
            <p className={`pb-1`}>Shop All Teas</p>
            <p className={`pb-1`}>Chai Samplers</p>
            <p className={`pb-1`}>Loose Leaf Tea</p>
            <p className={`pb-1`}>Tea Accessories</p>
            <p className={`pb-1`}>Gift Boxes</p>
            <p className={`pb-1`}>Subscription Plans</p>
          </div>
          <div className={`flex-1/6`}>
            <h6 className={`text-green-600 pb-3 font-semibold text-lg`}>CONTACT US</h6>
            <div className={`flex gap-1 pb-2`}>
              <div className={`flex items-center justify-center w-6 h-6 rounded-full bg-white`}>
                <FaMailBulk size={11} className={`text-green-800`}/>
              </div>
              <p>support@gmail.com</p>
            </div>
            <div className={`flex gap-1 pb-2`}>
              <div className={`flex items-center justify-center w-6 h-6 rounded-full bg-white`}>
                <FaPhone size={11} className={`text-green-800`}/>
              </div>
              <p>+91 7553459870</p>
            </div>
            <div className={`flex gap-1`}>
              <div className={`flex items-center justify-center w-6 h-6 rounded-full bg-white`}>
                <FaInstagram size={11} className={`text-green-800`}/>
              </div>
              <p>chaitearepublic</p>
            </div>
          </div>
          <div className={`flex flex-col flex-2/6`}>
            <h6 className={`text-green-600 pb-3 font-semibold text-lg`}>NEWSLETTER</h6>
            <p>
              Join our chai-loving community! Get exclusive offers, recipes, and tea tips delivered to
              your inbox
            </p>
            <input type="text" placeholder="Enter your Email" className={`bg-white py-4 px-9 text-black rounded-4xl mt-5 mb-3`}/>
            <button className={`bg-green-700 py-4 rounded-4xl`}>Subscribe</button>
          </div>
        </div>
        <div className={`flex items-center justify-center pt-5`}>
          <div>
            <FaCopyright size={11}/>
          </div>
          <p>Example All Rights Reserved</p>
        </div>
      </footer>
    </div>
  )
}

export default App
