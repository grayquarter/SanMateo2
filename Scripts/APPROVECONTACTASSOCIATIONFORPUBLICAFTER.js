var publicUserModel= aa.env.getValue("PublicUserModel");var mailFrom = "Auto_Sender@Accela.com";var mailCC = "";var mailTo = "paul.wu@achievo.com";var email = publicUserModel.getEmail();var currentDate = aa.util.formatDate(aa.util.now(),"MM/dd/yyyy");if(publicUserModel != null){	var templateName = "SEND_EMAIL_AFTER_APPROVE_CONTACT";	sendNotification(mailTo,templateName);}/* * get params for resubmit */function getParamsForPublic(publicUserModel){	var params = aa.util.newHashtable();	if(publicUserModel != null)	{		var peopleList = publicUserModel.getPeoples();		var peopleModel = null;				if(peopleList != null && peopleList.size() > 0)		{			var it = peopleList.iterator();     			while(it.hasNext())     			{				peopleModel = it.next();				break;			}		}				addParameter(params, "$$userID$$", publicUserModel.getUserID());				if(peopleModel != null)		{			addParameter(params, "$$contactName$$", peopleModel.getContactName());			addParameter(params, "$$businessName$$", peopleModel.getBusinessName());		}	}	return params;}/* * Send notification */function sendNotification(userEmailTo,templateName){	var params = getParamsForPublic(publicUserModel);		var result = aa.people.sendEmailAfterApproveContact(mailFrom, userEmailTo, mailCC, templateName, params);	if(result.getSuccess())	{		aa.log("Send email successfully!");		return true;	}	else	{		aa.log("Fail to send mail.");		return false;	}}/* * add parameter */function addParameter(pamaremeters, key, value){	if(key != null)	{		if(value == null)		{			value = "";		}		pamaremeters.put(key, value);	}}