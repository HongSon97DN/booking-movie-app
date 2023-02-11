import React, { Fragment } from "react";
import "./../BannerComponent/banner.css";
import "./blog.css";
export default function BlogComponent() {
  return (
    <div className="container">
      <div className="position-relative d-inline">
        <span className="blogs_title"> Blogs</span>
      </div>
      <div className="row mt-3 blog">
        <div className="col-sm-12 col-xl-6 col-lg-6 blog_left-wrapper">
          <div className="position-relative blog_wrap">
            <div
              className="blog_img"
              style={{
                backgroundImage:
                  "url(https://cdn.galaxycine.vn/media/2022/10/27/black-adam-cuu-tinh-cho-vu-tru-dc-mo-rong--5_1666852856433.jpg)",
              }}
            ></div>
            <div className="blog_content container">
              <div className="blog_content-title">
                <h4>[Review] Black Adam: Cứu Tinh Cho Vũ Trụ DC Mở Rộng?</h4>
                <h6 className="blog_mota">
                  Dwayne Johnson và các nhà làm phim WB rốt cuộc đã thành công
                  đưa gã mặc đồ đen lên màn ảnh rộng.
                </h6>
              </div>
            </div>
            <div className="banner_overlay"></div>
          </div>
        </div>
        <div className="col-sm-12 col-xl-6 col-lg-6 blog_right-wrapper">
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-sm-12 blog_right-item">
              <div className="position-relative blog_wrap">
                <div
                  className="blog_img"
                  style={{
                    backgroundImage:
                      "url(https://cdn.galaxycine.vn/media/2022/10/17/co-gai-tu-qua-khu-dap-do-hoan-toan-gai-gia-lam-chieu--1_1665989638939.jpeg)",
                  }}
                ></div>

                <div className="blog_content container">
                  <div className="blog_content-title">
                    <h4>
                      [Review] Cô Gái Từ Quá Khứ: Đạp Đổ Hoàn Toàn Gái Già Lắm
                      Chiêu?
                    </h4>
                    <h6 className="blog_mota">
                      Bộ phim giúp bộ đôi Bảo Nhân – Nam Cito mở màn Vũ trụ Mỹ
                      Nhân thành công nhưng lại "vắt chanh bỏ vỏ” Vũ trụ Gái
                      Già?
                    </h6>
                  </div>
                </div>
                <div className="banner_overlay"></div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-sm-12 blog_right-item">
              <div className="position-relative blog_wrap">
                <div
                  className="blog_img"
                  style={{
                    backgroundImage:
                      "url(https://cdn.galaxycine.vn/media/2022/8/29/nope-khong-phai-mot-phim-kinh-di-de-hieu--9_1661781678436.jpg)",
                  }}
                ></div>

                <div className="blog_content container">
                  <div className="blog_content-title">
                    <h4>Nope: Không Phải Một Phim Kinh Dị Dễ Hiểu!</h4>
                    <h6 className="blog_mota">
                      Ban đầu, Jordan Peele muốn tạo được một cảnh tượng thật
                      đặc biệt, khán giả buộc phải ra
                    </h6>
                  </div>
                </div>
                <div className="banner_overlay"></div>
              </div>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-xl-6 col-lg-6 col-sm-12 blog_right-item">
              <div className="position-relative blog_wrap">
                <div
                  className="blog_img"
                  style={{
                    backgroundImage:
                      "url(https://cdn.galaxycine.vn/media/2022/10/10/450_1665404205929.jpg)",
                  }}
                ></div>

                <div className="blog_content container">
                  <div className="blog_content-title">
                    <h4>[Review] Cười: Lời Nguyền Sẽ Không Dừng Lại!</h4>
                    <h6 className="blog_mota">
                      Nếu chẳng may bị ám bởi một lời nguyền ma quái, không thể
                      sống sót quá một tuần thì phải làm thế nào đây?
                    </h6>
                  </div>
                </div>
                <div className="banner_overlay"></div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-sm-12 blog_right-item">
              <div className="position-relative blog_wrap">
                <div
                  className="blog_img"
                  style={{
                    backgroundImage:
                      "url(https://cdn.galaxycine.vn/media/2022/9/27/avatartrungso-jpg-831663772044_1664262492363.jpg)",
                  }}
                ></div>

                <div className="blog_content container">
                  <div className="blog_content-title">
                    <h4>
                      [Review] Bỗng Dưng Trúng Số: Cứ 5 Phút Là Bắt Cười, Không
                      Để Ai Nghỉ Mệt
                    </h4>
                    <h6 className="blog_mota">
                      Bộ phim sẽ tạo tiếng cười trong vòng 2 tiếng, đem lại sự
                      lạc quan và cảm giác thoải mái nhất cho người xem.
                    </h6>
                  </div>
                </div>
                <div className="banner_overlay"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
