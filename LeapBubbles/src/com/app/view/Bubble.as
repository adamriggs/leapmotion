// com.adam.utils.Bubble// Adam Riggs//package com.app.view{	import com.adam.events.MuleEvent;	import com.adam.utils.Utils;		import away3d.entities.Mesh;	import away3d.primitives.SphereGeometry;

	//import flash.events.*;		public class Bubble {				//vars		protected var _velocity:Number;				//objects		private var utils:Utils=Utils.instance;		protected var _sphere:Mesh;				//const		public const NAME:String="bubble";		public const RETURNTYPE:String=NAME;				public function Bubble(){						init();		}		//*****Initialization Routines				public function init():void{			debug("init()");						initVars();			initEvents();			initObjs();		}				private function initVars():void{					}				private function initEvents():void{			utils.em.listen(NAME, onBubble);		}				private function initObjs():void{			_sphere=new Mesh(new SphereGeometry(100));		}		//*****Core Functionality						//*****Event Handlers				private function onBubble(e:MuleEvent):void{			/*debug("onBubble()");			debug("e.data.sender=="+e.data.sender);			debug("e.data.type=="+e.data.type);*/			switch(e.data.type){																default:					debug("onBubble()");					debug("*type not found");					debug("e.data.sender=="+e.data.sender);					debug("e.data.type=="+e.data.type);				break;							}		}				//*****Gets and Sets				public function get bubble():Mesh{return _sphere;}				public function get velocity():Number{return _velocity;}		//*****Utility Functions						//**debug		private function debug(str:String):void{			utils.debug(NAME,str);		}				}//end class}//end package