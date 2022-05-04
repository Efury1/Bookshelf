import React from "react";

export const BookContext = React.createContext();

class BookContextProvider extends React.Component {
  state = {
    books: [
      {
        title: "Kırmızı Pazartesi",
        author: "Gabriel Garcia Marquez",
        pageNum: 296,
        imageURL:
          "https://i.idefix.com/cache/600x600-0/originals/0000000064101-1.jpg",
        topic:
          "1968-1970 yılları arasında geçen olaylar, o günün toplumsal gerçeklerini de satırlara taşıyor. Ama romanın odağında bu toplumsal olaylar değil üçlü bir aşk var. Gençliğin rüzgârıyla hareketlenen İmkânsızın Şarkısını ölümle erken karşılaşan gençlerin hayatı yönlendiriyor. Hiçbir şeyin önem taşımadığı, amaçsızlığın ağır bastığı, özgür seksin kol gezdiği bir öğrenci hayatı... Ama diğer yanda da yoğun duygular var... İmkânsız aşklar, imkânsız şarkılar söyleten. Hemen hemen her Japon gencinin okuduğu roman anayurdu dışında da çok kişi tarafından sahipleniliyor.",
      },
    ],
  };

  render() {
    return (
      <BookContext.Provider value={this.state}>
        {this.props.children}
      </BookContext.Provider>
    );
  }
}

export default BookContextProvider;
