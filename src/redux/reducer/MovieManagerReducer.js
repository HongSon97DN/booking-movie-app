import { GET_INFO_FILM, GET_LIST_FILM,GET_DETAIL_FILM } from "../types/MovieManagerType";

const initialState = {
  arrMovie: [
    {
      maPhim: 6061,
      tenPhim: "Hành Tinh Hỗn Loạn 2",
      biDanh: "hanh-tinh-hon-loan-2",
      trailer: "https://www.youtube.com/embed/CNfNsNkgxjo",
      hinhAnh:
        "https://movienew.cybersoft.edu.vn/hinhanh/hanh-tinh-hon-loan-2_gp01.jpg",
      moTa: "Todd Hewwitt (Tom Holland) tình cờ phát hiện ra Viola (Daisy Ridley)- một cô gái sống sót sau khi phi thuyền của cô gặp nạn và rơi xuống hành tinh của cậu. Hành tinh này không hề có bóng dáng phụ nữ, còn đàn ông thì bị ảnh hưởng bởi 'Tiếng Ồn' - một thế lực thể hiện toàn bộ suy nghĩ của họ ra bên ngoài. Vì là cô gái duy nhất trên hành tinh kì lạ này, tính mạng của Viola bị đe dọa. Todd quyết tâm bảo vệ Viola và cả hai bị cuốn vào cuộc phiêu lưu nguy hiểm. Từ đó, Todd dần khám phá ra năng lực đặc biệt của mình, và phát hiện ra những bí mật đen tối của hành tinh mà cậu đang sống.",
      maNhom: "GP01",
      ngayKhoiChieu: "2022-11-05T18:04:24.843",
      danhGia: 9,
      hot: true,
      dangChieu: true,
      sapChieu: true,
    },
    {
      maPhim: 6288,
      tenPhim: "Conan: Bản Tình Ca Màu Đỏ",
      biDanh: "conan-ban-tinh-ca-mau-do",
      trailer: "https://www.youtube.com/embed/c0NZcazLSa0",
      hinhAnh:
        "https://movienew.cybersoft.edu.vn/hinhanh/conan-ban-tinh-ca-mau-do_gp01.jpeg",
      moTa: 'Vụ án giống như một vụ khủng bố, nhưng mục đích của hung thủ là gì thì vẫn chưa rõ. Conan và Heiji lại cảm thấy mọi thứ rất kỳ lạ trong tình trạng không thể giải thích được gì và cũng không tìm ra “bức thư” chịu trách nhiệm cho tội ác. Trong tình trạng hỗn loạn như vậy, Conan và những người khác đã gặp gỡ một người phụ nữ khẳng định rằng mình là vị hôn phu của Heiji. Tên của cô ấy là Oooka Momiji. Còn Kazuha thì nói "Heiji chính là người định mệnh của cô từ thời thơ ấu" và với từ cách là quán quân của Bách Nhân Nhất Thủ của trường THPT cô có mặt ở đây và được gọi là nữ hoàng tương lai.',
      maNhom: "GP01",
      ngayKhoiChieu: "2022-11-04T15:29:41.573",
      danhGia: 7,
      hot: true,
      dangChieu: true,
      sapChieu: true,
    },
    {
      maPhim: 10349,
      tenPhim: "Shin Ultraman",
      biDanh: "shin-ultraman",
      trailer: "https://www.youtube.com/embed/HYyOt1BetHE",
      hinhAnh:
        "https://movienew.cybersoft.edu.vn/hinhanh/shin-ultraman_gp01.png",
      moTa: "Shin Ultraman lại một lần nữa bay đến, mang theo giấc mơ chính nghĩa đầy hấp dẫn giữa hiện thực cuộc sống khắc nghiệt. Chính vì thế, đây sẽ là tác phẩm không thể bỏ qua với các fan của Ultraman và cả những khán giả nhí - thế hệ sẽ nối tiếp tinh thần đầy anh dũng, kiên cường này.",
      maNhom: "GP01",
      ngayKhoiChieu: "2022-11-04T14:52:58.86",
      danhGia: 6,
      hot: true,
      dangChieu: false,
      sapChieu: true,
    },
    {
      maPhim: 10378,
      tenPhim: "The dark knight",
      biDanh: "the-dark-knight",
      trailer: "",
      hinhAnh: "https://movienew.cybersoft.edu.vn/hinhanh/dog-va-cat_gp01.jpg",
      moTa: "Batman and joker and lamngoc",
      maNhom: "GP01",
      ngayKhoiChieu: "2022-10-15T00:00:00",
      danhGia: 10,
      hot: false,
      dangChieu: false,
      sapChieu: false,
    },
  ],
  arrMovieDefault: [],
  thongTinPhim: {},
  detailFilm: {},
};

export const MovieManagerReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_LIST_FILM:
      state.arrMovie = action.payload;
      state.arrMovieDefault = state.arrMovie;
      return { ...state };
    case GET_INFO_FILM:
      state.thongTinPhim = action.payload;
      return { ...state };
    case GET_DETAIL_FILM:
      state.detailFilm = action.payload;
      return { ...state };
    default:
      return state;
  }
};
