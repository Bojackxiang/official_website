import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

import { Observable } from 'rxjs/Observable';

import { SliderData } from '../../data/slider.data';

import { RestResponse } from '../../model/rest-response';
import { Slider } from '../../model/slider';
import { Slide } from '../../model/slide';

import { Setting } from '../../setting/setting';

@Component({
  selector: 'slider',
  styleUrls: ['./slider.component.css'],
  templateUrl: './slider.component.html',
})
export class SliderComponent implements OnInit, OnDestroy{
  @Input('sliderCode') sliderCode: string;
  loading: boolean = true;
  slider: Slider;
  slides: Slide[];
  currentSlide: Slide;
  moveX: number = 0;
  currentX: number = 0;
  width: number;
  domSliderFrame;
  domSliderWrap;
  cssSlideWidth;
  sliderMove$$;
  sliderClick$$;
  sliderAutoInit$$;
  sliderAutoContinue$$;
  slideresize$$;
  sliderBanClick$$;
  constructor(
    private router: Router,
    private sliderData: SliderData,
    private sanitizer: DomSanitizer,
  ) {
  }
  ngOnInit(): void{
    this.sliderData.getSlider(this.sliderCode)
        .subscribe( response => this.handleGetSlider(response),
                    err => {});
  }

  ngOnDestroy(): void{
    if(this.sliderMove$$){
      this.sliderMove$$.unsubscribe();
    }
    if(this.sliderClick$$){
      this.sliderClick$$.unsubscribe();
    }
    if(this.sliderAutoInit$$){
      this.sliderAutoInit$$.unsubscribe();
    }
    if(this.sliderAutoContinue$$){
      this.sliderAutoContinue$$.unsubscribe();
    }
    if(this.slideresize$$){
      this.slideresize$$.unsubscribe();
    }
    if(this.sliderBanClick$$){
      this.sliderBanClick$$.unsubscribe();
    }
  }

  handleGetSlider(response: RestResponse): void{
    // switch (response.code) {
    //   case 2000:
    //     this.slider = response.data;
    //     this.slides = this.slider.sliderSlides;
    //     this.domSliderFrame = <HTMLElement>document.querySelector('.m-slider');
    //     // 确认Slider所属DOM
    //     this.domSliderWrap = <HTMLElement>document.querySelector('.m-slider-img-ul');
    //     this.domSliderWrap.style.display = 'block';
    //     this.width = this.domSliderWrap.parentNode.clientWidth;
    //     this.currentSlide = this.slides[0];
    //     // 设置初始宽度
    //     this.domSliderWrap.style.width = this.width*this.slides.length+'px';
    //     this.cssSlideWidth = this.sanitizer.bypassSecurityTrustStyle(this.width+'px');
    //     // 设置Slider图
    //     for (var i = 0; i < this.slides.length; i++) {
    //       this.slides[i].cssBackgroundImage = this.sanitizer.bypassSecurityTrustStyle('url('+this.slides[i].slideImgUrl+')');
    //     }

    //     // 监听窗口resize
    //     this.slideresize$$ = Observable
    //                           .fromEvent(window, 'resize')
    //                           .debounceTime(100)
    //                           .subscribe(e => {
    //                             // set currentX as current slider NO.
    //                             this.currentX = this.currentX/this.width;
    //                             // reset window width
    //                             this.width = this.domSliderWrap.parentNode.clientWidth;
    //                             // remove transition animation
    //                             this.domSliderWrap.style["transition-duration"] = '0';
    //                             // reset width of sliders
    //                             this.domSliderWrap.style.width = this.width*this.slides.length+'px';
    //                             this.cssSlideWidth = this.sanitizer.bypassSecurityTrustStyle(this.width+'px');
    //                             // set currentX based on new width
    //                             this.currentX = this.currentX*this.width;
    //                             // move slider to new position
    //                             this.domSliderWrap.style.transform = 'translate3d('+this.currentX+'px,0,0)';
    //                           });

    //     // 防止点击slider直接跳转超链接
    //     this.sliderBanClick$$ = Observable
    //                       .fromEvent(this.domSliderWrap, 'click')
    //                       .subscribe( (e:any) => e.preventDefault());
    //                       // 如何让类型错误消失???


    //     // 监听文档的鼠标放开操作
    //     let docMouseUp$   = Observable.fromEvent(document, 'mouseup');
    //     // 监听文档的鼠标移动操作
    //     let docMouseMove$ = Observable.fromEvent(document, 'mousemove');
    //     // 监听Slider的鼠标按下操作
    //     let sliderMouseDown$ = Observable.fromEvent(this.domSliderWrap, 'mousedown');
    //     // 监听Slider的鼠标按下移动操作
    //     let sliderMouseDrag$ = sliderMouseDown$.flatMap( (smd:any) => {
    //                             smd.preventDefault();
    //                             return docMouseMove$.map( (mm:any) => {
    //                               return {
    //                                 moveX: mm.clientX - smd.clientX
    //                               };
    //                             }).takeUntil(docMouseUp$);
    //                           });
    //     // 监听Slider的鼠标按下放开操作
    //     let sliderMouseRelease$ = sliderMouseDown$.flatMap( smd => {
    //       return docMouseUp$.take(1);
    //     });

    //     this.sliderMove$$ = sliderMouseDrag$.subscribe( smd => {
    //       this.domSliderWrap.style["transition-duration"] = '0';
    //       if( (smd.moveX + this.currentX) < this.width*0.10 && (smd.moveX + this.currentX) > -1*this.width*(this.slides.length - 0.9) ){
    //         this.domSliderWrap.style.transform = 'translate3d('+(smd.moveX + this.currentX)+'px,0,0)';
    //         this.moveX = smd.moveX;
    //       }
    //     });

    //     this.sliderClick$$ = sliderMouseRelease$.subscribe(smd => {
    //       if(Math.abs(this.moveX) >= (this.width*0.20) ){
    //       // moveX >= 20% width
    //         if(this.moveX > 0){
    //         // drag from left to right
    //           this.currentX += this.width;
    //         }
    //         else{
    //         // drag from right to left
    //           this.currentX -= this.width;
    //         }
    //       }
    //       this.transformSlider();

    //       // 移动距离很小则作为点击
    //       if(Math.abs(this.moveX) < (this.width*0.03)){
    //         let url = this.slides[-1*this.currentX/this.width].slideClickUrl;
    //         if(url){
    //           if(url.indexOf(Setting.HOST)>=0){
    //             this.router.navigate([url.substr(url.indexOf(Setting.HOST) + Setting.HOST.length)]);
    //           }else{
    //             window.open(this.slides[-1*this.currentX/this.width].slideClickUrl);
    //           }
    //         }
    //       }

    //       this.moveX = 0;
    //     })

    //     // 监听Slider的鼠标经过操作
    //     let sliderMouseOver$ = Observable.fromEvent(this.domSliderFrame, 'mouseover');
    //     // 监听Slider的鼠标移出操作
    //     let sliderMouseOut$ = Observable.fromEvent(this.domSliderFrame, 'mouseout');
    //     // Slider循环播放并在鼠标悬停时停止
    //     let sliderLoop$ = Observable
    //                       .interval(3000)
    //                       .takeUntil(sliderMouseOver$);

    //     this.sliderAutoInit$$ = sliderLoop$.subscribe( e => {
    //                             this.nextSlider();
    //                           });

    //     this.sliderAutoContinue$$ = sliderMouseOut$.flatMap(e => {
    //                                   return sliderLoop$;
    //                                 }).subscribe( e => {
    //                                   this.nextSlider();
    //                                 });

    //     this.loading = false;
    //     break;
    // }
  }

  chooseSlider(i: number): void{
    this.currentX = -1*i*this.width;
    this.transformSlider();
  }

  nextSlider(): void{
    if(this.currentX == -1*(this.slides.length - 1)*this.width){
      this.currentX = 0;
    }else{
      this.currentX -= this.width;
    }
    this.transformSlider();
  }

  transformSlider(): void{
    this.domSliderWrap.style["transition-duration"] = '0.5s';
    this.domSliderWrap.style.transform = 'translate3d('+this.currentX+'px,0,0)';
    this.currentSlide = this.slides[-1*(this.currentX/this.width)];
  }
}