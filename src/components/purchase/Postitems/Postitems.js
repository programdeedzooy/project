import React from "react";
import Sales from "../../sales/Salesintro/Salesintro.module.css";
import Post from "./Postitems.module.css";
import carrot from "../../../assets/carrot-svgrepo-com.svg";
import { FaStar } from "react-icons/fa";
import Tilt from "react-tilt";
import { FaThLarge, FaCartPlus } from "react-icons/fa";
import Reviwe from "./Review";
import { Consumer } from "../../Context";
function Postitems(props) {
  return (
    <Consumer>
      {(value) => {
        const { aaa } = value;
        const id = props.match.params.id;
        console.log(id);
        const postss = aaa.filter((aa) => id == aa.id);
        console.log(postss);
        const { name, Rs, com, review } = postss[0];
        console.log(name);
        return (
          <div>
            {/* <Searchbar/> */}
            <div className={Sales.apps}>
              <div className={Post.back}>
                <div className={Post.title}>Purchase</div>
              </div>
              <div className={Post.itemDetials}>
                <div className={Post.headbox}>
                  <div className={Post.head}>{name}</div>
                  <div className={Post.itemabout}>{com}</div>
                  <div className={Post.itemimgbox}>
                    <div className={Post.itemboximg}></div>
                    <div className={Post.itemboximg}></div>
                    <div className={Post.itemboximg}></div>
                  </div>
                </div>
                <div className={Post.bubble}>
                  <div className={Post.items}>
                    <img src={carrot} alt="" />
                    <div className={Post.rup}>₨ {Rs}</div>
                  </div>
                </div>
                <div className={Post.headbox1}>
                  <div className={Post.Rating}>
                    Review: <Reviwe review={review} />
                  </div>
                  <div className={Post.Rating}>
                    items:
                    <div className={Post.itemimgbox}>
                      <div className={Post.itemboximg1}></div>
                      <div className={Post.itemboximg1}></div>
                      <div className={Post.itemboximg1}></div>
                    </div>
                  </div>
                  <div className={Post.Kg}>
                    kg:
                    <div className={Post.itemimgbox1}>
                      <div className={Post.itemboximg2}>
                        <span className={Post.center}> 1</span>{" "}
                      </div>
                      <div className={Post.itemboximg2}>
                        <span className={Post.center}> 2</span>
                      </div>
                      <div className={Post.itemboximg2}>
                        <span className={Post.center}> 3</span>
                      </div>
                    </div>
                    <div className={Post.itemimgbox1}>
                      <div className={Post.itemboximg2}>
                        <span className={Post.center}> 4</span>{" "}
                      </div>
                      <div className={Post.itemboximg2}>
                        <span className={Post.center}> 5</span>
                      </div>
                      <div className={Post.itemboximg2}>
                        <span className={Post.center}> 6</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={Post.button}>
                  {" "}
                  <span className={Post.center1}>Add to cart</span>{" "}
                </div>
              </div>

              <div className={Post.box}>
                <Tilt className="Title">
                  <div className="Tilt-inner">
                    <div className={Sales.product}>
                      <div className={Sales.circle}>
                        <div className={Sales.icon1}>
                          <FaThLarge color="black" />
                        </div>
                      </div>
                      <div className={Sales.circle1}>
                        <div className={Sales.icon1}>
                          <FaCartPlus color="black" />
                        </div>
                      </div>
                      <div className={Sales.innerbox}>
                        <img className={Sales.img} src={carrot} alt="" />
                      </div>
                      <div className={Sales.name}>carrot</div>
                      <div className={Sales.rup}>₨ 30</div>
                    </div>
                  </div>
                </Tilt>
                <Tilt className="Title">
                  <div className="Tilt-inner">
                    <div className={Sales.product}>
                      <div className={Sales.circle}>
                        <div className={Sales.icon1}>
                          <FaThLarge color="black" />
                        </div>
                      </div>
                      <div className={Sales.circle1}>
                        <div className={Sales.icon1}>
                          <FaCartPlus color="black" />
                        </div>
                      </div>
                      <div className={Sales.innerbox}>
                        <img className={Sales.img} src={carrot} alt="" />
                      </div>
                      <div className={Sales.name}>carrot</div>
                      <div className={Sales.rup}>₨ 30</div>
                    </div>
                  </div>
                </Tilt>
                <Tilt className="Title">
                  <div className="Tilt-inner">
                    <div className={Sales.product}>
                      <div className={Sales.circle}>
                        <div className={Sales.icon1}>
                          <FaThLarge color="black" />
                        </div>
                      </div>
                      <div className={Sales.circle1}>
                        <div className={Sales.icon1}>
                          <FaCartPlus color="black" />
                        </div>
                      </div>
                      <div className={Sales.innerbox}>
                        <img className={Sales.img} src={carrot} alt="" />
                      </div>
                      <div className={Sales.name}>carrot</div>
                      <div className={Sales.rup}>₨ 30</div>
                    </div>
                  </div>
                </Tilt>
                <Tilt className="Title">
                  <div className="Tilt-inner">
                    <div className={Sales.product}>
                      <div className={Sales.circle}>
                        <div className={Sales.icon1}>
                          <FaThLarge color="black" />
                        </div>
                      </div>
                      <div className={Sales.circle1}>
                        <div className={Sales.icon1}>
                          <FaCartPlus color="black" />
                        </div>
                      </div>
                      <div className={Sales.innerbox}>
                        <img className={Sales.img} src={carrot} alt="" />
                      </div>
                      <div className={Sales.name}>carrot</div>
                      <div className={Sales.rup}>₨ 30</div>
                    </div>
                  </div>
                </Tilt>
              </div>
            </div>
          </div>
        );
      }}
    </Consumer>
  );
}

export default Postitems;
