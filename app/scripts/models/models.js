'use strict';

/**
 * Created with JetBrains WebStorm.
 * User: jim.lavin
 * Date: 11/22/12
 * Time: 9:44 AM
 * To change this template use File | Settings | File Templates.
 */
var breweverywhere = breweverywhere || {};

breweverywhere.LogIn = function() {
    var self = this;
    self.userName = '';
    self.password = '';
};

breweverywhere.Adjunct = function () {
    var self = this;
    self.Name = '';
    self.Type = ''; // can be "Spice", "Fining", "Water Agent", "Herb", "Flavor" or "Other"
    self.Use = ''; // can be "Boil", "Mash", "Primary", "Secondary" or "Bottling"
    self.Time = 0.0; // in minutes
    self.Amount = 0.0; // liters or kg
    self.AmountIsWeight = false;
    self.UseFor = '';
    self.Notes = '';
};

breweverywhere.Brewer = function () {
    var self = this;
    self.UserName = '';
    self.FirstName = '';
    self.LastName = '';
    self.Email = '';
    self.Location = '';
    self.Bio = '';
    self.WebSite = '';
    self.Avatar = '';
    self.Photo = '';
    self.Password = '';
    self.DateJoined = '';
    self.Inventory = null;
    self.BrewerIsAdmin = false;
};

breweverywhere.BrewerInventory = function () {
    var self = this;
    self.Equipment = [];
    self.Adjuncts = [];
    self.Fermentables = [];
    self.Hops = [];
    self.WaterProfiles = [];
    self.Yeast = [];
}

breweverywhere.Equipment = function () {
    var self = this;
    self.Name = '';
    self.BoilSize = 0.0;
    self.BatchSize = 0.0;
    self.TUNVolume = 0.0;
    self.TUNWeight = 0.0;
    self.TUNSpecificHeat = 0.0;
    self.TopUpWater = 0.0;
    self.TrubChillerLoss = 0.0;
    self.EvapRate = 0.0; // percent
    self.BoilTime = 0.0;
    self.CalcBoilTime = 0.0;
    self.LauterDeadspace = 0.0;
    self.TopUpKettle = 0.0;
    self.HopUtilization = 0.0; // percent
    self.Notes = '';
};

breweverywhere.Fermentable = function() {
    var self = this;
    self.Name = '';
    self.Type = ''; // can be "Grain", "Sugar", "Extract", "Dry Extract" or "Adjunct"
    self.Amount = 0.0;
    self.Yield = 0.0; // percent
    self.Color = 0.0; // Lovibond units (SRM)
    self.AddAfterBoil = false;
    self.Origin = '';
    self.Supplier = '';
    self.Notes = '';
    self.CoarseFineDiff = 0.0; // percent
    self.Moisture = 0.0; // percent
    self.DiastaticPower = 0.0; // in lintner units
    self.Protein = 0.0; // percent
    self.MaxInBatch = 0.0; // percent
    self.RecommendMash = false;
    self.IBUGalPerPound = 0.0;
    self.DisplayAmount = '';
    self.Potential = 0.0;
    self.DisplayColor = 0.0;
    self.ExtractSubstitute = '';
};

breweverywhere.Hop = function () {
    var self = this;
    self.Name = '';
    self.Alpha = 0.0; // percent
    self.Amount = 0.0; // weight in kg
    self.Use = ''; // can be "Boil", "Dry Hop", "Mash", "First Wort" or "Aroma"
    self.Time = 0.0;  // in minutes
    self.Notes = '';
    self.Type = ''; // can be "Bittering", "Armoa" or "Both"
    self.Form = ''; // can be "Pellet", "Plug" or "Leaf"
    self.Beta = 0.0; // percent
    self.HSI = 0.0; // percent
    self.Origin = '';
    self.Substitutes = '';
    self.Humulene = 0.0; // percent
    self.Caryophyllene = 0.0; // percent
    self.Cohumulone = 0.0; // percent
    self.Myrcene = 0.0; // percent
};

breweverywhere.MashProfile = function () {
    var self = this;
    self.Name = '';
    self.GrainTemp = 0.0;
    self.MashSteps = [];
    self.Notes = '';
    self.TUNTemp = 0.0;
    self.SpargeTemp = 0.0;
    self.PH = 0.0;
    self.TUNWeight = 0.0;
    self.TUNSpecificHeat = 0.0;
    self.EquipAdjust = false;
};

breweverywhere.MashStep = function () {
    var self = this;
    self.Name = '';
    self.Type = ''; // can be "Infusion", "Temperature" or "Decoction"
    self.InfuseAmount = 0.0;
    self.Temperature = 0.0; // in C
    self.StepTime = 0.0; // in minutes
    self.RampTime = 0.0; // in minutes
    self.EndTemperature = 0.0;
};

breweverywhere.Recipe = function () {
    var self = this;
    self.BrewerId = '';
    self.Name = '';
    self.Type = ''; // can only be "Extract", "Partial Mash" or "All Grain"
    self.Style = null;
    self.StyleId = '';
    self.Equipment = [];
    self.BrewerName = '';
    self.AssistantBrewerName = '';
    self.BatchSize = 0.0; // in liters
    self.BoilSize = 0.0; // in liters
    self.BoilTime = 0.0; // in minutes
    self.BrewHouseEfficiency = 0.0;
    self.Hops = [];
    self.Fermentables = [];
    self.Adjuncts = [];
    self.Yeast = [];
    self.WaterProfile = null;
    self.MashProfile = null;
    self.Notes = '';
    self.TasteNotes = '';
    self.TasteRating = 0.0; // 0-50.0
    self.OriginalGravity = 0.0;
    self.FinalGravity = 0.0;
    self.FermentationStages = 0;
    self.PrimaryAge = 0.0; // in days
    self.PrimaryTemp = 0.0; // in C
    self.SecondaryAge = 0.0; // in days
    self.SecondaryTemp = 0.0; // in C
    self.TertiaryAge = 0.0; // in days
    self.TertiaryTemp = 0.0; // in C
    self.ConditioningAge = 0.0; // bottle conditioning age in days
    self.ConditioningAgeTemp = 0.0; // temp to age bottles in C
    self.Date = ''; // date brewed
    self.Carbonation = 0.0; // carbonation in vol of CO2
    self.ForcedCarbonation = false;
    self.PrimingSugarName = '';
    self.CarbonationTemp = 0.0;
    self.PrimingSugarEquiv = 0.0;
    self.KegPrimingFactor = 0.0;
};

breweverywhere.Style = function() {
    var self = this;
    self.Name = '';
    self.Category = '';
    self.CategoryNumber = ''; // BJCP style guide int
    self.StyleLetter = ''; // BJCP style letter
    self.StyleGuide = ''; // "BJCP", "AHA", etc
    self.Type = ''; // can be "Lager", "Ale", "Mead", "Wheat", "Mixed" or "Cider"
    self.OGMin = 0.0;
    self.OGMax = 0.0;
    self.FGMin = 0.0;
    self.FGMax = 0.0;
    self.IBUMin = 0.0;
    self.IBUMax = 0.0;
    self.ColorMin = 0.0;
    self.ColorMax = 0.0;
    self.CarbMin = 0.0;
    self.CarbMax = 0.0;
    self.ABVMin = 0.0;
    self.ABVMax = 0.0;
    self.Aroma = '';
    self.Appearance = '';
    self.Flavor = '';
    self.Mouthfeel = '';
    self.OverallImpression = '';
    self.Notes = '';
    self.Profile = '';
    self.Ingredients = '';
    self.Examples = '';
};

breweverywhere.WaterProfile = function() {
    var self = this;
    self.Name = '';
    self.Amount = 0.0; // in liter
    self.Calcium = 0.0;
    self.Bicarbonate = 0.0;
    self.Sulfate = 0.0;
    self.Chloride = 0.0;
    self.Sodium = 0.0;
    self.Magnesium = 0.0;
    self.PH = 0.0;
    self.Notes = '';
};

breweverywhere.Yeast = function () {
    var self = this;
    self.Name = '';
    self.Type = ''; // can be "Ale", "Lager", "Wheat", "Wine" or "Champagne"
    self.Form = ''; // can be "Liquid", "Dry", "Slant" or "Culture"
    self.Amount = 0.0; // in liters
    self.AmountIsWeight = false;
    self.Laboratory = '';
    self.ProductID = '';
    self.MinTemperature = 0.0; // in C
    self.MaxTemperature = 0.0; // in C
    self.Flocculation = ''; // can be "Low", "Medium", "High" or "Very High"
    self.Attenuation = 0.0; // percent
    self.Notes = '';
    self.BestFor = '';
    self.TimesCultured = 0;
    self.MaxReuse = 0;
    self.AddToSecondary = false;
};

