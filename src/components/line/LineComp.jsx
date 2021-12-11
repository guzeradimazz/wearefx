import paper from 'paper';

export default function LineComp() {

   window.onload = function() {
       paper.install(window);
       paper.setup('paper-canvas');

       // draw or call your drawing functions here

       paper.view.onFrame = draw;
   }

   function draw(event) {
       // animation loop
   }

   // Most return null
   return null;
}