////Generated by Prefab3D 2.141, Sun Feb 24 22:41:21 GMT-0500 2013. www.closier.nl/prefab
package data {

	import away3d.core.base.Geometry;
	import data.ASDReader;

	public class Honda_odysseyData {

		[Embed(source="asd/Honda_odysseyData.asd", mimeType="application/octet-stream")]
		private var Honda_odysseyDataASD:Class;

		public function get geometryData():Geometry
		{
			return ASDReader.decodeGeometry(new Honda_odysseyDataASD());
		}

	}
}